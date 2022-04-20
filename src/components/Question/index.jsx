import React from "react";
import "./Question.css";

const Question = ({
  id,
  question,
  options,
  handleNextQuestionBtnClick,
  // isLastQuestion,
  checkAndUpdateAnswer,
  isDisabled,
  showResult,
}) => {
  return (
    <div>
      <div>
        <p>{question}</p>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {options.map((option) => {
            return (
              <li key={`${id}${option}`}>
                <input
                  name="option"
                  type="radio"
                  value={option}
                  // create useCallback
                  onChange={(e) => checkAndUpdateAnswer(Number(e.target.value))}
                />
                {option}
              </li>
            );
          })}
        </ul>
      </div>
      <button disabled={isDisabled} onClick={handleNextQuestionBtnClick}>
        {/* {isLastQuestion ? "finish quiz" : "next"} */}
        next
      </button>
    </div>
  );
};

export default Question;
