import { nanoid } from "nanoid";
import React from "react";

function Question(props) {
  console.log(props.q.all_answers);

  const answersElement = props.q.all_answers.map((x) => {
    return (
      <button key={nanoid()} answer={x} id={null} className="btn-answers">
        {x}
      </button>
    );
  });

  return (
    <div className="question">
      <h4 className="quiz--question">{props.q.question}</h4>
      <div className="quiz--answers">
        {/* <button className="btn-answers">asnwer 1</button>
        <button className="btn-answers">asnwer 2</button>
        <button className="btn-answers">asnwer 3</button>
        <button className="btn-answers">asnwer 4</button> */}
        {answersElement}
      </div>
      <hr />
    </div>
  );
}

export default Question;
