import React, { useEffect, useState } from "react";
import { convertUnicode } from "../util";
import Question from "./Question";

export default function Quiz() {
  const [qs, setQs] = useState([]);
  console.log(qs);

  useEffect(() => {
    // console.log("Effect ran");
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQs(data.results));

    // var questionsArray = [...qs];
    // questionsArray.forEach((x) => delete x.category);
    // questionsArray.forEach((x) => delete x.type);
    // questionsArray.forEach((x) => delete x.difficulty);
    // added id (to resolve key error)
    // let count = 1;
    // questionsArray = questionsArray.map((x) => {
    //   return { ...x, id: count++ };
    // });
    // console.log(questionsArray);
    // setQs(qs);
    // console.log(qs);
  }, []);

  const question = qs.map((q) => <Question key={q.id} q={q} />);

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
