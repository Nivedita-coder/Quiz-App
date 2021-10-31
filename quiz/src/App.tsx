import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
//components
import QuestionCard from './components/QuestionCard';
//types
import { QuestionsState, Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App: React.FC =() => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);
  

    const startTrivia = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);

    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nestQuestion = () => {

    }

    return(

    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      ):null}
      <p className="score">Score:</p>
      <p>Loading Questions..</p>
{/*      <QuestionCard
       questionNr={number + 1}
       totalQuestions={TOTAL_QUESTIONS}
       question={questions[number].question}
       answers={questions[number].answers}
       userAnswer={userAnswers ? userAnswers[number]:undefined}
       callback={checkAnswer}
      /> */}
      <button className="next" onClick={nestQuestion}>
        Next Question
      </button>
      </div>
    );
  
}

export default App;
