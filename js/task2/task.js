// Имитация API для получения пользователя
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 500;

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`Failed to fetch user ${userId}`));
      } else {
        resolve({
          id: userId,
          name: `User ${userId}`,
          details: `Additional details for user ${userId}`,
        });
      }
    }, delay);
  });
}

// Имитация API для получения постов
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    const delay = Math.random() * 1500 + 300;

    setTimeout(() => {
      resolve({
        userId: userId,
        posts: [
          `Post 1 by User ${userId}`,
          `Post 2 by User ${userId}`,
          `Post 3 by User ${userId}`,
        ],
      });
    }, delay);
  });
}

const userIds = [1, 2, 3, 4, 5];

function solve() {
  // Место для решения
}

function solveAdvanced() {
  // Место для решения
}

solve();
// solveAdvanced();
