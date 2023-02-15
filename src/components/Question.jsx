import { nanoid } from "nanoid";
import React from "react";

function Question(props) {
  // console.log(props.q.all_answers);

  const answersElement = props.q.all_answers.map((answer) => {
    let id = null;
    if (!props.playing) {
      if (props.q.correct === answer) {
        id = "correct";
      } else if (props.q.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }
    return (
      <button
        onClick={() => handleSelect(answer, props.q.id)}
        key={nanoid()}
        qid={props.q.id}
        id={id}
        className={
          answer === props.q.selected ? "btn-answers selected" : "btn-answers"
        }
      >
        {answer}
      </button>
    );
  });

  // console.log(answersElement);

  function handleSelect(x, qid) {
    if (!props.playing) {
      return;
    }
    props.handleSelect(x, qid);
  }
  // console.log(props.q.correct, props.q.selected);

  // console.log(props);

  return (
    <div className="question">
      <h4 className="quiz--question">{props.q.question}</h4>
      <div className="quiz--answers">{answersElement}</div>
      <hr />
    </div>
  );
}

export default Question;
