import { signal, effect, computed } from "./signals.js";
const [count, setCount] = signal(0);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  setCount(count() + 1);
});

effect(() => {
  button.innerText = count();
});

const double = computed(() => count() * 2);

effect(() => {
  console.log("double count", double());
});
