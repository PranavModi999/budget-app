import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import { useState } from "react";
import "./Expenses.css";

function Expenses({ expenseData }) {
  const [filterYear, setFilterYear] = useState("2020");
  const selectYearChangeHandler = (year) => {
    setFilterYear(year);
  };
  expenseData = expenseData.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSelectYearChange={selectYearChangeHandler}
        />
        {expenseData.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
}
export default Expenses;
