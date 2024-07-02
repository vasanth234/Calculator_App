import React from 'react';
import {useState} from 'react'
import Keypad from './Keypad'; // Correct the import statement to reference 'Keypad'
import './App.css'
const App = () => {
  const [data,setData]=useState('');

  function handleclick(value){
    setData(data+value)
  }

  function Calculate(value){
    const evaluated=eval(data);
    setData(evaluated);
  }

  function Cleared(){
    setData('')
  }
  return (
    <div className='container'>
      <h2 className='textcolor'>Calculator app is here</h2>
      <div className='calculator'>
        <input type='text' value={data} className='output' />
        <Keypad handleclick={handleclick} handlecalculate={Calculate} handleclear={Cleared}/> {/* Correct the component usage */}
      </div>
    </div>
  );
}

export default App;
