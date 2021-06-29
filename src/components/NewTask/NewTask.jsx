import React, { useState, useRef } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const [isValid, setIsValid] = useState(true);

  const enteredDate = useRef();
  const enteredTitle = useRef();
  const enteredContent = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      title: enteredTitle.current.value,
      content: enteredContent.current.value,
      date: new Date(enteredDate.current.value),
    };

    if (
      taskData.title !== "" &&
      taskData.content !== "" &&
      taskData.date instanceof Date &&
      !isNaN(taskData.date)
    ) {
      props.onSaveTaskData(taskData);
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
          ref={enteredDate}
        />
        <input
          className="form__title"
          type="text"
          placeholder="Title"
          ref={enteredTitle}
        />
        <input
          className="form__content"
          type="text"
          placeholder="Content"
          ref={enteredContent}
        />
        <button className="form__add-button button" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
