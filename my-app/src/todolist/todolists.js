import React, { useState } from "react";
import "./todolist.css";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    const newItem = { input };
    setList([...list, newItem]);
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleEdit = (index) => {
    const editedItem = list[index];
    setList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      setInput(editedItem.input);
      return newList;
    });
  };
  const num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <>
    <div className="mainscreen">
      <div className="main-w container">
        <h1 className="heading text-center ">To Do List</h1>
        <div className="days bg-primary text-white"></div>

        <div className="lists  d-flex align-items-center ">
          <input className="inp  " placeholder="Add a task " type="text" value={input} onChange={handleInputChange} />
          <button className ="adds  " onClick={handleAdd}>Add</button>
        </div>
        <div className="con " id="containers">
          {list.map((item, index) => (
            <div
              key={index}
              className=" lists  d-flex justify-content-between text-white" >
              {item.editing ? (
                <>
                  <input type="text"value={input} onChange={handleInputChange}/>
                  <button onClick={handleAdd}>Save</button>
                </>
              ) : (
                <>
                <div className="inputss">
                <a className="days text-white" link="/">
                    {num[index]}.
                  </a>
                  <div className="itemInput text-white">{item.input}</div>
                </div>
                
                 
                  <div className="btns">
                    <button
                      className="edit btn "
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                 
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default ToDoList;
