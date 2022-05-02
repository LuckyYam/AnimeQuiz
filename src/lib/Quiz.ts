import { readFileSync } from 'fs-extra';
import { Utils } from './Utils';
import { join } from 'path';

export class Quiz {
  private quizzes = JSON.parse(
    readFileSync(join(__dirname, '..', '..', 'assets', 'quizzes.json'), 'utf-8')
  ) as unknown as IQuiz[];

  private utils = new Utils();

  constructor() {}

  /**
   * Genrates random Quiz
   * @returns {IQuiz} The Quiz object
   */

  public getRandom = (): IQuiz => {
    const quiz = this.quizzes[Math.floor(Math.random() * this.quizzes.length)];
    quiz.options = this.utils.shuffleArray(quiz.options);
    return quiz;
  };

  /**
   * Gets a Quiz by the ID
   * @returns {IQuiz} The Quiz object
   */

  public getQuizById = (id: number): IQuiz => {
    const index = this.quizzes.findIndex((x) => x.id === id);
    if (index < 0)
      return {
        id: -1,
        question: '',
        options: [],
        answer: '',
      };
    this.quizzes[index].options = this.utils.shuffleArray(
      this.quizzes[index].options
    );
    return this.quizzes[index];
  };
}

export interface IQuiz {
  id: number;
  question: string;
  options: string[];
  answer: string;
}
