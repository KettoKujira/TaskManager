import React, { useState } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //вернуться к этому в курсе

    const taskData = {
      title: enteredTitle,
      content: enteredContent,
      date: new Date(enteredDate),
    };

    if (
      taskData.title !== "" &&
      taskData.content !== "" &&
      taskData.date instanceof Date && !isNaN(taskData.date)
    ) {
      props.onSaveTaskData(taskData);
      setEnteredDate(""); //вернуться к этому в курсе
      setEnteredTitle("");
      setEnteredContent("");
      console.log(taskData.date instanceof Date);
    } else alert("Заполните все поля!");
  };

  return (
    <div className="root_new-task new-task">
      <form className="new-task__form form" onSubmit={submitHandler}>
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
