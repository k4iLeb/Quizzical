import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [quizQs, setQuizQs] = useState([]);

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
        });
      });
      setQuizQs(q);
      // console.log(quizQs);
    }
    getQuestions();
  }, []);

  const question = quizQs.map((q) => <Question key={q.id} q={q} />);

  return (
    <div className="quiz">
      {question}
      {/* <div className="question">
        <h4 className="quiz--question">QUESTION</h4>
        <div className="quiz--answers">
          <button className="btn-answers">asnwer 1</button>
          <button className="btn-answers">asnwer 2</button>
          <button className="btn-answers">asnwer 3</button>
          <button className="btn-answers">asnwer 4</button>
        </div>
        <hr />
      </div> */}
    </div>
  );
}
