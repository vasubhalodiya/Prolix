// import React,{useState} from "react";
// import './App.css'
// import Todoinput from './components/Todoinput'
// import Todolist from './components/Todolist';

// function App() {
//   const [listTodo, setListTodo] = useState([])
//   let addList = (inputText)=>{
//     setListTodo([...listTodo, inputText]);
//   }
//   const deleteListItem = (key)=>{
//     let newListTodo = [...listTodo];
//     newListTodo.splice(key,1);
//     setListTodo([...newListTodo]);
//   }
//   return (
//     <div className="main-container">
//       <div className="center-container">
//         <Todoinput addList={addList}/>
//         <h1 className="app-heading">TODO</h1>
//         <hr/>
//         {listTodo.map((listItem,i)=>{
//           return (
//             <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputData) => {
    setListTodo([...listTodo, inputData]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
