import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { convertUnicode } from "../util";
import Question from "./Question";

export default function Quiz() {
  const [quizQs, setQuizQs] = useState([]);
  // console.log(qs);

  // useEffect(() => {
  //   // console.log("Effect ran");
  //   fetch(
  //     "https://opentdb.com/api.php?amount=5&category=18&type=multiple&encode=base64"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setApiQs(data.results));
  // }, []);

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
      console.log(quizQs);
      // setAllMemes(data.data.memes);
    }
    getQuestions();
  }, []);

  // useEffect(() => {
  //   var questionsArray = [...apiQs];
  //   questionsArray.forEach((x) => delete x.category);
  //   questionsArray.forEach((x) => delete x.type);
  //   questionsArray.forEach((x) => delete x.difficulty);
  //   // added id (to resolve key error)
  //   let count = 1;
  //   questionsArray = questionsArray.map((x) => {
  //     return { ...x, id: count++ };
  //   });
  //   questionsArray = questionsArray.map((x) => {
  //     return {
  //       ...x,
  //       all_answers: x.incorrect_answers.concat(x.correct_answer),
  //     };
  //   });

  // console.log(questionsArray);
  //   setQuizQs([...questionsArray]);
  //   console.log(quizQs);
  // }, []);

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
