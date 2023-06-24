import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";

import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={expenseData} />
        <ExpensesList list={expenseData} />
      </Card>
    </div>
  );
}
export default Expenses;
