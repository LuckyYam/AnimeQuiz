<div align=center>

# AnimeQuiz

[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=339933&labelColor=white&style=flat-square)](https://npmjs.com/package/anime-quiz)

**AnimeQuiz** is a simple module to generate Anime Quiz with options for answer.

It has over 100 quizzes (Some will be added soon)

</div>

---

## Installation

```sh
npm i anime-quiz

yarn add anime-quiz
```

## Usage Example

### To generate Random quiz

```js
const { getRandomQuiz } = require("anime-quiz");
console.log(getRandomQuiz());
```

## Result

```
{
      id: 31,
      image:
        "https://www.quizexpo.com/wp-content/uploads/2020/02/4Z2ZT6DEm_EORh_tUnAocLiemLxNE876EIejVQVq_AA-1-1024x591.jpg",
      gif: null,
      question:
        "Naruto has different types of modes. Do you know what is the name of this mode?",
      options: [
        "Kuruma Chakra Mode",
        "Six Paths Sage Mode",
        "Tailed Beast Bomb Rasen Shiruken",
        "None of the above",
      ],
      answer: ["Six Paths Sage Mode", 2],
}
```

### To generate quiz by their id

```js
const { getQuizById } = require("anime-quiz");
console.log(getQuizById(65));
```

## Result (It will return null if no results are found)

```
{
      id: 65,
      image: null,
      gif: "https://media0.giphy.com/media/HCgIpUBbHxVX6degal/giphy.gif?cid=790b76119582464d32479e1e29a12f6f8e2eae6464c9da63&rid=giphy.gif&ct=g",
      question:
        "This scene is from the anime 86 (Season 1), what is the episode of this scene?",
      options: ["Episode 4", "Episode 7", "Episode 2", "Episode 1"],
      answer: ["Episode 2", 3],
}
```
