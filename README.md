<div align=center>

# AnimeQuiz

[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=339933&labelColor=white&style=flat-square)](https://npmjs.com/package/anime-quiz)

**AnimeQuiz** is a simple module to generate Anime Quiz with options for answer.

It has 50+ quizzes (Some will be added soon)


</div>

---

## Installation

```sh
npm i anime-quiz

yarn add anime-quiz
```

## Usage Example

### To get Random quiz

```js
const { getRandomQuiz } = require("anime-quiz");
console.log(getRandomQuiz());
```

### To get the quiz by their id

```js
const { getQuizById } = require("anime-quiz");
console.log(getQuizById());
```

## Result

```
{
    id: 36,
      image:
        "https://www.quizexpo.com/wp-content/uploads/2020/02/top-10-beautiful-cute-ghibli-girls-06-1024x611.jpg",
      gif: null,
      question: "Name this character",
      options: ["Nami", "Sophie", "Kiki", "Haruka"],
      answer: "Sophie"
}

```
