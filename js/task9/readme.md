# Теоретические вопросы по JavaScript

## Основы JavaScript

1. Что такое замыкание (closure) и как оно работает?
2. Объясните разницу между `var`, `let` и `const`.
3. Что такое hoisting и как оно работает в JavaScript?
4. Объясните разницу между `==` и `===`.
5. Что такое прототипное наследование?
6. Как работает контекст (`this`) в JavaScript?
7. Что такое IIFE (Immediately Invoked Function Expression) и зачем оно используется? [Ответ тут - IIFE](https://developer.mozilla.org/ru/docs/Glossary/IIFE)
8. Объясните разницу между функциями-выражениями и функциями-объявлениями.
9. Что такое "strict mode" и как его включить? [Ответ тут - Strict mode](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode)

## Асинхронное программирование

1. Что такое Event Loop и как он работает?
2. Объясните разницу между callback, promise и async/await.
3. Что такое микротаски и макротаски?
4. Как работает метод `Promise.all` и в чем его особенности? (Рассказать про остальные методы промисов)
5. Что такое `async` и `await` и как они работают?
6. Как обрабатывать ошибки в асинхронном коде?

## Работа с DOM

1. Как добавить/удалить/заменить элемент в DOM?
2. Что такое делегирование событий и зачем оно нужно? [Ответ тут - Делегирование событий](https://learn.javascript.ru/event-delegation)
3. Как работает метод `addEventListener`?
4. Объясните разницу между `event.target` и `event.currentTarget`.
5. Как предотвратить стандартное поведение события? [Ответ тут - preventDefault](https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault)

## Работа с массивами и объектами

1. Какие методы массивов вы знаете и как они работают (map, filter, reduce, find и т.д.)?
2. Как скопировать объект или массив?
3. Что такое деструктуризация и как она работает?
4. Как объединить несколько объектов в один?

## Современные возможности JavaScript (ES6+)

1. Что такое стрелочные функции и как они работают?
2. Что такое шаблонные строки и как их использовать? [Ответ тут - template literals](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals)
3. Объясните, что такое модули в JavaScript и как их использовать.
4. Что такое генераторы и как они работают? [Ответ тут - Generator](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Generator)
5. Что такое `Set` и `Map` и чем они отличаются от массивов и объектов?

## Оптимизация и производительность

1. Как оптимизировать производительность JavaScript-кода? (общие мысли об оптимизации, можно привести примеры частных случаев)
2. Что такое дебаунсинг (debouncing) и троттлинг (throttling)?
3. Как работает механизм garbage collection в JavaScript?

## Безопасность

1. Что такое XSS (Cross-Site Scripting) и как его предотвратить?
2. Что такое CORS (Cross-Origin Resource Sharing) и как с ним работать?
3. Как защитить приложение от CSRF (Cross-Site Request Forgery)?

## Тестирование

1. Какие виды тестирования вы знаете (unit, integration, e2e)?
2. Какие инструменты для тестирования JavaScript-кода вы используете? (встроенные инструменты node js 22+ версии, либо библиотеки типа jest)

## Прочее

1. Что такое Web Workers и как они работают? [Ответ тут - Web Worker](https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API/Using_web_workers)
2. Как работает Service Worker и зачем он нужен? [Ответ тут - Service Worker](https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API)
3. Что такое PWA (Progressive Web App) и какие у него преимущества?
