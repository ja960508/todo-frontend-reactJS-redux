import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/todos";
import {
  changeInput,
  insert,
  toggle,
  remove,
} from "../modules/todos_redux_action";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => {
    return {
      input: todos.input,
      todos: todos.todos,
    };
  });
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch]
  );
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </>
  );
};

export default TodosContainer;
