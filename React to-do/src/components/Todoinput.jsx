// import React from 'react'
// import {useState} from "react";

// const Todoinput = (props) => {
//     const [inputText, setInputText] = useState('')
//     return (
//         <div className="input-container">
//             <input 
//             type="text" 
//             className="input-box-todo" 
//             value={inputText}
//             placeholder="Enter your todo" 
//             onChange={ e => {setInputText(e.target.value)}}/>
//             <button className="add-btn" 
//             onClick={()=>{
//                 props.addList(inputText)
//                 setInputText('')
//             }}>+</button>
//         </div>
//     )
// }

// export default Todoinput

import React, { useState } from 'react';

const Todoinput = (props) => {
  const [userInput, setUserInput] = useState({ userName: "", age: "" });

  const handleAdd = () => {
    const { userName, age } = userInput;
    if (userName && age) {
      props.addList({ username: userName, age });
      setUserInput({ userName: "", age: "" }); // Reset inputs
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        value={userInput.userName}
        placeholder="Enter your username"
        onChange={(e) => setUserInput({ ...userInput, userName: e.target.value })}
      />
      <input
        type="number"
        className="input-box-todo"
        value={userInput.age}
        placeholder="Enter your age"
        onChange={(e) => setUserInput({ ...userInput, age: e.target.value })}
      />
      <button className="add-btn" onClick={handleAdd}>+</button>
    </div>
  );
};

export default Todoinput;
