console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Nested Timeout");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
});

new Promise((resolve) => {
  console.log("Promise Constructor");
  resolve();
}).then(() => {
  console.log("Promise 3");
});

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("End");
