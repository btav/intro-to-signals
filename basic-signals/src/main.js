import "../styles/style.css";
import { signal, effect, computed } from "./signals";

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  setCount(count() + 1);
});

const [count, setCount] = signal(0);
const double = computed(() => count() * 2);

effect(() => {
  btn.innerText = count();
});

effect(() => {
  console.log("Double the count is", double());
});
