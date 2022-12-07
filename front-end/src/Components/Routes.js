import Form from './Form';
import axios from 'axios';
import { useNavigate, Routes, Route } from 'react-router-dom'
import Display from './Display';
import { useEffect, useState } from 'react';

const Main = () => {
   let navigate = useNavigate()

   const [form, setForm] = useState({
    partyname:"",
    startdate:"",
    leader:"",
    members:""
   })

   const [card, setCard] = useState([]);
   useEffect(() => {
    getDetails();
   }, []);

   const handleChange = (e) => {
    setForm({
      ...form,
       [e.target.name]:e.target.value,
    });
   };

   const handleSubmit = async (e) => {
   e.preventDefault();
   if(form.partyname === "" || form.startdate === "" || form.leader === "" || form.members === "") {
    return  alert ("Fill all the inputs")
   }else{
    try{
      const saveDetails = await axios.post(
        "http://localhost:3005/save_details",
          form,
      );
      getDetails();
      navigate('/display')
      setForm({
        partyname: "",
        startdate: "",
        leader: "",
        members: ""
      })
      return saveDetails;
      
    } catch (error) {
      console.log("error", error);
    }
  }
    
  };
  const getDetails = async () => {
    await axios
      .get("http://localhost:3005/get_details")
      .then((response) => {
        const data = response.data;
        setCard(data);
      })
      .catch(() => {
      });
    };
   

  return (

    <div>
      <Routes>
        <Route path="/" exact  element={<Form handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/display" element={<Display card={card} getDetails={getDetails}/>} />
      </Routes>
    </div>

  );
}

export default Main;
