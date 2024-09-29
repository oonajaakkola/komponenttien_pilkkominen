import React from "react";
import TodoList from "./todolist";

function TodoTable({ todos, deleteTodo }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.task}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
