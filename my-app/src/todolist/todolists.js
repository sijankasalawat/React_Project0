import React, { useState } from 'react';


const ToDoList = () => {
    const [input, setInput] = React.useState('');
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    }
  
    const Inputs =()=>{
      return(
        <div>
          <input type="text" value={input} onChange={handleInputChange} />
          <button>Add</button>
        </div>
      )
    }
  
  }
  
export default ToDoList;