import React from "react";
import { convertUnicode } from "../util";

function Question(props) {
  // console.log(props);
  // const question = convertUnicode(props.q.question);
  return (
    <div className="question">
      <h4 className="quiz--question">{props.q.question}</h4>
      <div className="quiz--answers">
        <button className="btn-answers">asnwer 1</button>
        <button className="btn-answers">asnwer 2</button>
        <button className="btn-answers">asnwer 3</button>
        <button className="btn-answers">asnwer 4</button>
      </div>
      <hr />
    </div>
  );
}

export default Question;
