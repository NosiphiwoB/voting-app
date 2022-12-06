import Form from './Form';
import axios from 'axios';
import { useNavigate, Routes, Route } from 'react-router-dom'
import Display from './Display';
import { useEffect } from 'react';

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

  return (

    <div>
      <Routes>
        <Route path="/" exact  element={<Form/>}/>
        <Route path="/display" element={<Display/>} />
      </Routes>
    </div>

  );
}

export default Main;
