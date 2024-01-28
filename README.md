# Тестовое задание

Этот проект, созданный с помощью[create-react-app](https://create-react-app.dev/docs/getting-started/).

## Приступая к работе

Клонируйте ссылку на репозиторий на локальный компьютер `git clone [ссылка на репозторий]`

Зайдите в директорию `cd test-task-posts`

Запустить приложение в режиме разработки: `npm run start`

Откройте http://localhost:3000 в своем браузере, чтобы увидеть результат.

## Этот проект использует технологии:

- React 
- TypeScript
- RTK Query
- React Router DOM 6
- JSON Placeholder
- Стили Materialize.css
- FSD-архитектура

## Описание
1. главная страница - список постов (бесконечный скролл + виртуализация). В JSONPlaceholder есть 100 постов. 
2. каждый пост в списке - это строка: номер + заголовок + описание обрезанное "...", если не влезает + кнопка "просмотр"
3. кнопка "просмотр" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"

## ссылка на деплой gh-pages

https://olvsivkov.github.io/test-task-posts