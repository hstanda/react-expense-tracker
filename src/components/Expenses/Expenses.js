import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const onFilterChangeHandler = (filterYear) => {
    setYear(filterYear);
  };
  const filteredEpenses = props.items.filter( expense =>{
    return expense.date.getFullYear().toString() == year
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onChangeFilter={onFilterChangeHandler}
        />
        {filteredEpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
