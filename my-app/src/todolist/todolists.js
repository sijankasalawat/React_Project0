import React, { useState } from 'react';
import './todolist.css';

const ToDoList = () => {
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAdd = () => {
    const newItem = { input, counter };
    setList([...list, newItem]);
    setCounter(counter + input);
    setInput('');
  }

  return (
    <div className='main-w'>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
      
      {list.map((item, index) => (
        <div key={index} className="row">{item.input}
        
          </div>
          
      ))}

    </div>
  );
}

export default ToDoList;
