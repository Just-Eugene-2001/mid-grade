async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
}

async function fetchTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await response.json();
}

async function solve() {
  try {
    const [users, todos] = await Promise.all([fetchUsers(), fetchTodos()]);

    const todosByUser = new Map();
    todos.forEach(todo => {
      if (!todosByUser.has(todo.userId)) {
        todosByUser.set(todo.userId, []);
      }
      todosByUser.get(todo.userId).push(todo);
    });

    users.forEach(user => {
      console.log(`userId: ${user.id}, name: ${user.name}`);
      if (todosByUser.has(user.id)) {
        todosByUser.get(user.id).forEach(todo => {
          console.log(`todoId: ${todo.id}, todoTitle: ${todo.title}`);
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

solve();
