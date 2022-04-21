import React from "react";
import "./Result.css";

const Result = ({ questions }) => {
  console.log(questions);
  return (
    <div>
      {questions.map((question) => {
        return (
          <div key={question.question}>
            <h2>{question.question}</h2>
            <p>{question.chosenAnswer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
