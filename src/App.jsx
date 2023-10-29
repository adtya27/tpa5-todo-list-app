import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
function App() {
  return (
    <>
      <Header />
      <InputTodo />

      {/* status */}
      <div className="flex flex-row justify-center">
        <button className="m-4 p-3 w-[100px] border-solid border-black border-2 rounded-full ring-4 ring-blue-500 ring-inset text-white text-xl bg-blue-500">All</button>
        <button className="m-4 p-3 w-[100px] border-solid border-black border-2 rounded-full ring-4 ring-blue-500 ring-inset text-white text-xl bg-blue-500">Active</button>
        <button className="m-4 p-3 w-[150px] border-solid border-black border-2 rounded-full ring-4 ring-blue-500 ring-inset text-white text-xl bg-blue-500">Completed</button>
      </div>

      {/* todolist */}
      <TodoList />
    </>
  );
}

export default App;
