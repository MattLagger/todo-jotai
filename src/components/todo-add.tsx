import { useAtom, useSetAtom } from "jotai";
import { newTodo, postTodo, readWriteNewTodo } from "../atoms/todos.atom";

const TodoAdd = () => {
  const [todo, setNewTodo] = useAtom(readWriteNewTodo);

  const saveTodo = useSetAtom(postTodo);
  return (
    <div className="flex mt-6">
      <input
        onChange={(e) => setNewTodo({ ...todo, title: e.target.value })}
        value={todo.title}
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      />
      <button
        onClick={() => saveTodo()}
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
