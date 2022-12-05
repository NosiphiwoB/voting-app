import Form from './Form';
import {Routes, Route } from 'react-router-dom'
import Display from './Display';

const Main = () => {


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
