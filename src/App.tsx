import { Provider } from "jotai";
import { Suspense } from "react";
import TodoAdd from "./components/todo-add";
import TodoList from "./components/todo-list";

function App() {
  return (
    <Provider>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <TodoAdd />
          <TodoList />
        </div>
      </Suspense>
    </Provider>
  );
}

export default App;
