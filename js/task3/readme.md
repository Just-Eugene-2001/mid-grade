# Задание 3 - работа с API и Map

Дан файл [task.js](./task.js). Необходимо:

1. Получить всех пользователей по api [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
2. Получить все todo по api [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos).
3. Сопоставить всех пользователей и их todo. (У todo есть поле `userId`)
4. Вывести список todo, последовательно, для каждого пользователя (Для обозначения пользователя использовать поля `id` и `name` ).

### Примечание

В этом задании необходимо самому реализовать запросы с помощью `fetch`. Помимо этого, необходимо как можно оптимальнее сопоставить пользователей и их todo. В этой реализации рекомендуется использовать Map [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). Можно реализовывать вспомогательные функции.
