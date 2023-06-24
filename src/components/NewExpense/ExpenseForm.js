import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [inputDate, setInputDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  const titleChangeHandler = (evt) => {
    setInputTitle(evt.target.value);
    // setUserInput({ ...userInput, inputTitle: evt.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitle: evt.target.value };
    // });
  };
  const amountChangeHandler = (evt) => {
    setInputAmount(evt.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, inputAmount: evt.target.value };
    // });
  };
  const dateChangeHandler = (evt) => {
    setInputDate(evt.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, inputDate: evt.target.value };
    // });
  };
  const submitFormHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    
    props.onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-06-23"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
