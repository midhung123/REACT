import React, { useState } from "react";
import { addTodos } from "../redux/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos:state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
console.log('props from store',props)
  const add = () => {
    if (todo === "") {
      alert("Field is Empty");
    }
  }

  return (
    <div className="addTodos">
        <input
          type="text"
          className="todo-input"
          onChange={(e) => handleChange(e)}
          value={todo}
        />
        <button
        //  onClick={() => add()}
        onClick={() => 
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
        >Add Item</button>
        <ul>
          {props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>
          })}
        </ul>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
