import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const onFilterChangeHandler = (filterYear) => {
    setYear(filterYear);
  };
  const filteredEpenses = props.items.filter((expense) => {
    if (year === "--") {
      return true;
    }
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onChangeFilter={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredEpenses} />
        <ExpensesList items={filteredEpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
