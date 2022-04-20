import React, { useState, useCallback } from "react";
import data from "../../data";
import Question from "../Question";
import Result from "../Result";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState(data.math);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const question = questions[currQuestionIndex];

  // const showResult = () => {
  //   console.log("result");
  // };

  const handleNextQuestionBtnClick = useCallback(() => {
    setIsDisabled(true);
    const nextIndex = currQuestionIndex + 1;

    setCurrQuestionIndex(nextIndex);
  });

  const checkAndUpdateAnswer = useCallback(
    (currentAnswer) => {
      const questionsClone = { ...questions };
      const questionClone = { ...questionsClone[currQuestionIndex] };
      questionClone.chosenAnswer = currentAnswer;

      setQuestions(questionsClone);
      setIsDisabled(false);
    },
    [questions, currQuestionIndex, setQuestions, setIsDisabled]
  );

  const isLastQuestion = currQuestionIndex === questions.length - 1;
  console.log("currQuestionIndex", currQuestionIndex);

  console.log("questions.length", questions.length);

  return (
    <div>
      {isLastQuestion ? (
        <Result />
      ) : (
        <Question
          {...question}
          handleNextQuestionBtnClick={handleNextQuestionBtnClick}
          isLastQuestion={isLastQuestion}
          checkAndUpdateAnswer={checkAndUpdateAnswer}
          isDisabled={isDisabled}
          // showResult={showResult}
        />
      )}
    </div>
  );
};

export default App;
