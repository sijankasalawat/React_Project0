import React, { useState } from 'react';
import './todolist.css';

const ToDoList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  

  const handleAdd = () => {
    const newItem = { input };
    setList([...list, newItem]);
    setInput('');
    
   
  }

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  }

  const handleEdit = (index) => {
    const editedItem = list[index];
    setList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      setInput(editedItem.input);
      return newList;
    });
  }

  return (
    <>
     <div className='main-w container'>
      <h1 >To Do List</h1>

      <div className="lists w-100 d-flex align-items-center">
      <input className=' inputs ' type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>

      </div>
     
      
      {list.map((item, index) => (
      
        <div key={index} className=" Lists d-flex justify-content-between">
          {item.editing ? (
            <>
              
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
              />
              <button onClick={handleAdd}>Save</button>
            </>
          ) : (
            <>
              <div>{item.input}</div>
              <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>

              </div>
            

            </>
          )}
        </div>
      ))}
    </div>
    </>
   
  );
}

export default ToDoList;
