import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delTodo, editTodo, getTodo } from '../redux/reducers/todo-reducers';

function TodoList() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [textInput, setTextInput] = useState('');
  const { isLoading, todos } = useSelector((state) => state.todo);

  console.log(isLoading, todos);

  useEffect(() => {
    dispatch(getTodo());
  }, [id, textInput]);

  const delHandleClick = (id) => (e) => {
    e.preventDefault();
    dispatch(delTodo(id));
  };

  const setEditForm = (id, text) => (e) => {
    e.preventDefault();

    setId(id);
    setTextInput(text);
  };

  const editHandleClick = (e) => {
    e.preventDefault();
    let newValue = {
      id: id,
      text: textInput,
    };
    dispatch(editTodo(id, newValue));
  };
  return (
    <div>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          todos.map((todo) => (
            <div className="m-4 p-3 flex mx-auto w-[40%] justify-between rounded-md border-solid border-black border-2 ring-4 ring-blue-500 ring-inset text-black text-xl" key={todo.id}>
              <input type="checkbox"></input>
              <span className="flex mr-[500px]">{todo.text}</span>
              <div>
                <button onClick={setEditForm(todo.id, todo.text)}>✏️</button>
                <button onClick={delHandleClick(todo.id)}>❌</button>
              </div>
            </div>
          ))
        )}
        <div className="mt-10 p-4">
          <form className="flex flex-row justify-center ">
            <input type="hidden" value={id} />
            <input
              className="w-[20%] rounded-md text-gray-900 shadow-sm ring-4 ring-offset ring-blue-500 border-solid border-black border-2 text-xl m-4 "
              type="text"
              placeholder="  what to do"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button className="m-4 p-3  w-[100px] border-solid border-black border-2 rounded-md ring-4 ring-blue-500 ring-inset text-white text-2xl bg-blue-500" onClick={editHandleClick}>
              edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
