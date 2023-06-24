import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseEditingHandler = (val) => setIsEditing(val);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  if (!isEditing) {
    return (
      <div className="new-expense">
        <button onClick={() => expenseEditingHandler(true)}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onExpenseEdit={expenseEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }
};
export default NewExpense;
