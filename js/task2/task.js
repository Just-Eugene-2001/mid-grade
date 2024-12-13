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

function fetchUserDataWithRetries(userId, retries = 3) {
  return fetchUserData(userId).catch((error) => {
    if (retries > 0) {
      console.log(`retrying to fetch user ${userId}...`);
      return fetchUserDataWithRetries(userId, retries - 1);
    } else {
      console.error(`failed to fetch user ${userId} after multiple attempts: ${error.message}`);
    }
  });
}

async function solve() {
  // Место для решения
  for (const userId of userIds) {
    const user = await fetchUserDataWithRetries(userId);
    if (user) {
      console.log(user);
      const posts = await fetchUserPosts(userId);
      console.log(posts);
    }
  }
}

async function solveWithRace() {
  const userPromises = userIds.map(userId => fetchUserData(userId));

  const user = await Promise.race(userPromises);
  if (user) {
    console.log(user);
    const posts = await fetchUserPosts(user.id);
    console.log(posts);
  }
}

async function solveWithAny() {
  const userPromises = userIds.map(userId => fetchUserData(userId));

  const user = await Promise.any(userPromises);
  if (user) {
    console.log(user);
    const posts = await fetchUserPosts(user.id);
    console.log(posts);
  }
}

async function solveWithAll() {
  const userPromises = userIds.map(userId => fetchUserData(userId));

  const users = await Promise.all(userPromises);
  console.log('users', users)
  for (const user of users) {
    if (user) {
      console.log(user);
      const posts = await fetchUserPosts(user.id);
      console.log(posts);
    }
  }
}

solve();
// solveWithRace();
// solveWithAny();
// solveWithAll();
