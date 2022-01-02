"use strict";

module.exports = {
  getRandomQuiz: getRandomQuiz,
  getQuizById: getQuizById,
};

const quiz = require("./lib/quizzes");

function getRandomQuiz() {
  return quiz.quizzes[Math.floor(Math.random() * quiz.quizzes.length)];
}

function getQuizById(id) {
  if (id > 0 && id <= quiz.quizzes.length) {
    return quiz.quizzes[id];
  } else {
    return null;
  }
}
