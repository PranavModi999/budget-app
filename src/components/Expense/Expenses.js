import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses({ expenseData }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenseData[0].title}
        amount={expenseData[0].amount}
        date={expenseData[0].date}
      />
      <ExpenseItem
        title={expenseData[1].title}
        amount={expenseData[1].amount}
        date={expenseData[1].date}
      />
      <ExpenseItem
        title={expenseData[2].title}
        amount={expenseData[2].amount}
        date={expenseData[2].date}
      />
      <ExpenseItem
        title={expenseData[3].title}
        amount={expenseData[3].amount}
        date={expenseData[3].date}
      />
    </Card>
  );
}
export default Expenses;
