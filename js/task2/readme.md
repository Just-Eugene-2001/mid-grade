# Задание 2 - Promise

Задание на знание Promise в JavaScirpt.

Дан файл [task.js](./task.js). Необходимо:

1. Получить всех пользователей и их посты.
2. Последовательно вывести в терминал сначала информацию о пользователе, а затем его посты (для каждого).
3. Обработать ошибку, при получении пользователя разными способами:
   - Вывести сообщение об ошибке получения пользователя.
   - Сделать механизм повторного получения пользователя. Максимум повторных обращений - `3` и только после этого вывести ошибку.

Дополнительное задание (в нем не нужно реализовывать обработку ошибки):

1. Использовать вывод результата c применением `Promise.race()` [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
2. Использовать Вывод результата с применением `Promise.any()` [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
3. Использовать Вывод результата с применением `Promise.all()` [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
4. Сравнить разницу, объяснить в чем отличие решений `any` от `race`.

### Примечание

функции `fetchUserData` и `fetchUserPosts` изменять нельзя. Можно писать вспомогательные функции.
