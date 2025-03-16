let subscriber = null;

export function signal(initialValue) {
  let value = initialValue;

  const subscribers = new Set();

  function read() {
    if (subscriber) {
      subscribers.add(subscriber);
    }
    return value;
  }

  function write(newValue) {
    value = newValue;

    for (const fn of subscribers) {
      fn();
    }
  }

  return [read, write];
}

export function effect(fn) {
  subscriber = fn;
  fn();
  subscriber = null;
}

export function computed(fn) {
  const [read, write] = signal();

  effect(() => {
    write(fn());
  });

  return read;
}
