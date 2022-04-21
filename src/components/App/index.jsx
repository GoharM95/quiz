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

  const handleNextQuestionBtnClick = useCallback(() => {
    setIsDisabled(true);
    const nextIndex = currQuestionIndex + 1;

    setCurrQuestionIndex(nextIndex);
  });

  // questionClone is updating, questions not
  const checkAndUpdateAnswer = useCallback(
    (currentAnswer) => {
      const questionsClone = [...questions];
      const questionClone = { ...questionsClone[currQuestionIndex] };
      questionClone.chosenAnswer = currentAnswer;

      console.log("questionClone", questionClone);

      setQuestions(questionsClone);
      setIsDisabled(false);

      console.log("questions", questions);
    },
    [questions, currQuestionIndex, setQuestions, setIsDisabled]
  );

  const isLastQuestion = currQuestionIndex === questions.length;
  const toggleNextBtn = currQuestionIndex === questions.length - 1;

  // console.log("currQuestionIndex", currQuestionIndex);
  // console.log("questions.length", questions.length);

  return (
    <div>
      {isLastQuestion ? (
        <Result questions={questions} />
      ) : (
        <Question
          {...question}
          handleNextQuestionBtnClick={handleNextQuestionBtnClick}
          checkAndUpdateAnswer={checkAndUpdateAnswer}
          isDisabled={isDisabled}
          isLastQuestion={isLastQuestion}
          toggleNextBtn={toggleNextBtn}
        />
      )}
    </div>
  );
};

export default App;
