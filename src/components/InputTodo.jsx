import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getTodo } from '../redux/reducers/todo-reducers';

function InputTodo() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);
  const [input, setInput] = useState('');

  console.log(isLoading, todos);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let newTodo = {
      text: input,
      isComplete: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <div className="mt-10 p-4">
      <form className="flex flex-row justify-center ">
        <input
          className="w-[20%] rounded-md text-gray-900 shadow-sm ring-4 ring-offset ring-blue-500 border-solid border-black border-2 text-xl m-4 "
          type="text"
          placeholder="  what to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="m-4 p-3  w-[100px] border-solid border-black border-2 rounded-md ring-4 ring-blue-500 ring-inset text-white text-2xl bg-blue-500" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
