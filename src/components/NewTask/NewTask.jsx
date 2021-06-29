import React, { useState } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [isValid, setIsValid] = useState(true);

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      content: enteredContent,
      date: new Date(enteredDate),
    };

    if (
      taskData.title !== "" &&
      taskData.content !== "" &&
      taskData.date instanceof Date &&
      !isNaN(taskData.date)
    ) {
      props.onSaveTaskData(taskData);
      setEnteredDate("");
      setEnteredTitle("");
      setEnteredContent("");
    } else setIsValid(false);
  };

  return (
    <div className="root_new-task new-task">
      <form
        className={`new-task__form form ${!isValid ? "invalid" : ""}`}
        onSubmit={submitHandler}
      >
        <input
          className="form__date"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <input
          className="form__title"
          type="text"
          placeholder="Title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <input
          className="form__content"
          type="text"
          placeholder="Content"
          value={enteredContent}
          onChange={contentChangeHandler}
        />
        <button className="form__add-button button" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
