import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [quizQs, setQuizQs] = useState([]);
  // for the Check Answers/play again button
  const [playing, setPlaying] = useState(true);
  // to restart the game
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  // shuffle array
  const shuffledArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&type=multiple&encode=base64"
      );
      const data = await res.json();
      // console.log(data.results);
      let q = [];
      data.results.forEach((question) => {
        q.push({
          question: atob(question.question),
          correct: atob(question.correct_answer),
          all_answers: shuffledArray(
            question.incorrect_answers.concat(question.correct_answer)
          ).map((x) => atob(x)),
          id: nanoid(),
          checked: false,
          selected: "",
        });
      });
      setQuizQs(q);
      // console.log(quizQs);
    }
    getQuestions();
  }, [count]);

  const question = quizQs.map((q) => (
    <Question key={q.id} q={q} handleSelect={handleSelect} playing={playing} />
  ));

  function handleSelect(answer, id) {
    setQuizQs((oldQuizQs) =>
      oldQuizQs.map((q) => {
        return q.id !== id ? q : { ...q, selected: answer, checked: true };
      })
    );
    // console.log(quizQs);
    // console.log(answer, id);
  }

  function checkAnswers() {
    if (quizQs.every((x) => x.checked)) {
      setPlaying((oldPlaying) => !oldPlaying);
      quizQs.forEach((answer) => {
        if (answer.correct === answer.selected) {
          setScore((oldScore) => (oldScore += 1));
        }
      });
    }
  }
  function playAgain() {
    setPlaying((oldPlaying) => !oldPlaying);
    setCount((oldCount) => oldCount + 1);
    setScore(0);
  }

  return (
    <div className="quiz">
      {question}
      <div className="results-div">
        {playing ? (
          <button className="res-btn" onClick={checkAnswers}>
            Check answers
          </button>
        ) : (
          <>
            <h2 className="results-txt">
              You scored {score}/5 correct answers
            </h2>
            <button className="res-btn" onClick={playAgain}>
              Play again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
