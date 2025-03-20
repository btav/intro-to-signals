import { createSignal, createMemo, createEffect } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);

  const double = createMemo(() => count() * 2);

  createEffect(() => {
    console.log("double count is", double());
  });

  return (
    <div>
      <button onClick={increment}>count is {count()}</button>
    </div>
  );
}

export default App;
