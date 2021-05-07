import React from "react";
import "./NewTask.css";

const NewTask = () => {
  return (
    <div className="root_new-task new-task">
      <form className="new-task__form form">
        <input
          className="form__date"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
        />
        <input className="form__title" type="text" placeholder="Title" />
        <input className="form__content" type="text" placeholder="Content" />
        <button className="form__add-button button" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
