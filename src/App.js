import React, { useState } from "react";
import Button from './components/Button/index';
import TextField from "./components/TextField";

function App() {
  const [todosList, setTodosList] = useState([]);

  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    createdAt: "",
  });

  const handleCreateTodo = (e) => {
    e.preventDefault();
    setTodosList([
      ...todosList,
      {
        ...todo,
        checked: false,
        disabled: true,
        id: Date.now(),
        createdAt: new Date().toLocaleDateString(),
      },
    ]);
    setTodo({
      title: "",
      desc: "",
      createdAt: "",
      TextField: "",
    });
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    const filteredTodos = todosList.filter((item) => item.id !== id);
    setTodosList(filteredTodos);
  };

  const handleEditTodo = (id) => {
    const todosListCopy = todosList.map((i) => {
      if (i.id === id) {
        return { ...i, disabled: false };

      } else {
        return { ...i, disabled: true };
      }
    });
    setTodosList(todosListCopy);
  };

  const handleCheckTodo = (id) => {
    const todosListCopy = todosList.map((i) => {
      if (i.id === id) {
        return { ...i, checked: true };
      } else {
        return i;
      }
    });
    setTodosList(todosListCopy);
  };

  return (
    <>
      <div className="d-flex justify-content-center container">
      <h1 className="mt-3 text-dark">TODO with React</h1>
      </div>
       
      <form className="d-flex justify-content-center flex-column container w-50">
        
        <TextField 
          id="title"
          label="Title :"
          placeholder="Enter Title"
          type="text"
          className= "mt-2"
          value={todo.title}
          inputProps={{
            onChange: (e) => {
              setTodo({ ...todo, title: e.target.value })
            }
          }}
          disabled={true}
        />
         
        <TextField 
          id="desc"
          label="Description :"
          placeholder="Enter desc"
          type="text"
          className= "mt-3"
          as="textarea"
          value={todo.desc}
          inputProps={{
            onChange: (e) => {
              setTodo({ ...todo, desc: e.target.value })
            }
          }}
          
        /> 
 
        <Button className= "mt-3" variant="success" onClick={handleCreateTodo}>submit</Button>

        <hr className="mt-4" />
      </form>

       

      <ul className="d-flex justify-content-center flex-column container w-50 ps-4">
        {todosList.map((item) => (
          <li>
             
            <h3>
              <input className="border-0 outline-0  bg-transparent"
                style={{ color: item?.checked ? "green" : "#212121"}}
                disabled={item.disabled}
                value={item.title}
              />
            </h3>
            <p>{item.desc}</p>
            <small>{item.createdAt}</small>
            <br />
            <Button variant="secondary" className="me-2 mt-3" onClick={() => handleDeleteTodo(item.id)}>Delete</Button>
            <Button variant="secondary" className="me-2 mt-3" onClick={() => handleEditTodo(item.id) }>Edit</Button>
            <Button variant="secondary" className="mt-3" onClick={() => handleCheckTodo(item.id)}>Check</Button>
             
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
