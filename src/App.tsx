import { Provider } from "jotai";
import { Suspense } from "react";
import TodoAdd from "./components/todo-add";
import TodoList from "./components/todo-list";

function App() {
  return (
    <Provider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <TodoAdd />
            </div>
            <div>
              <TodoList />
            </div>
          </div>
        </div>
      </Suspense>
    </Provider>
  );
}

export default App;
