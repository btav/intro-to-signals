import { useSignal, type ReadonlySignal } from "@preact/signals-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function CountButton({
  count,
  onClick,
}: {
  count: ReadonlySignal<number>;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={() => onClick()}>
      count is {count}
    </button>
  );
}

function App() {
  const count = useSignal(0);

  const increment = () => {
    count.value++;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CountButton count={count} onClick={increment} />
    </>
  );
}

export default App;
