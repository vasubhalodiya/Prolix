// import React from 'react'

// const Todolist = (props) => {
//   return (
//     <li className="list-item">
//         {props.item}
//         <span className='icons'>
//         <i className="fa-solid fa-trash-can icon-delete" 
//         onClick={e=>{
//             props.deleteItem(props.index)
//         }}></i>
//         </span>
//     </li>
//   )
// }

// export default Todolist


import React from 'react';

const Todolist = (props) => {
  return (
    <li className="list-item">
      <span className="todo-text">
        <strong>Username:</strong> {props.item.username}, <strong>Age:</strong> {props.item.age}
      </span>
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
};

export default Todolist;
