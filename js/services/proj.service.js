'use strict'

var gProjs = [
  {
    id: 'touch-nums',
    name: 'Touch The Numbers',
    title: 'How fast are you?',
    desc: 'A game to check if you are fast enough, touch the numbers by their order, and do it QUICK!',
    imgUrl: 'img/portfolio/touch-nums.png',
    url: 'https://ohayonb.github.io/touch-nums/',
    publishedAt: 1657746000000,
    labels: ['Game'],
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'Avoid the mines',
    desc: 'The minesweeper we all love, with some changes to make it more fun',
    imgUrl: 'img/portfolio/minesweeper.png',
    url: 'https://ohayonb.github.io/MineSweeper/',
    publishedAt: 1658350800000,
    labels: ['Game', 'Matrices'],
  },
  {
    id: 'todo',
    name: 'Todo App',
    title: 'Manage your tasks',
    desc: 'An app for your daily tasks, you can mark tasks as done, create new ones, and more..',
    imgUrl: 'img/portfolio/todo.png',
    url: 'https://ohayonb.github.io/todo/',
    publishedAt: 1658869200000,
    labels: ['MVC'],
  },

  {
    id: 'ball-board',
    name: 'Ball Board',
    title: 'Collect those balls',
    desc: 'Addicted game to play while you have some time off',
    imgUrl: 'img/portfolio/ball-board.png',
    url: 'https://ohayonb.github.io/ball-board/',
    publishedAt: 1658005200000,
    labels: ['Game'],
  },

  {
    id: 'in-picture',
    name: 'In Picture',
    title: `Tap on what's inside`,
    desc: `Click what's inside the picture`,
    imgUrl: 'img/portfolio/in-picture.png',
    url: 'https://ohayonb.github.io/in-picture/',
    publishedAt: 1657746000000,
    labels: ['Minigame'],
  },
  {
    id: 'book-shop',
    name: 'Book Shop',
    title: 'Buy any book you want',
    desc: 'An online book shop where you can update book details, filter book according to your needs, and also sort them by price',
    imgUrl: 'img/portfolio/book-shop.png',
    url: 'https://ohayonb.github.io/book-shop/',
    publishedAt: 1658955600000,
    labels: ['MVC', 'CRUDL'],
  },
]

function getProjectById(projectId) {
  return gProjs.find((project) => project.id === projectId)
}
