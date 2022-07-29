import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const onFilterChangeHandler = (filterYear) => {
    setYear(filterYear);
  };
  console.log(year + " year ");
  const items = props.items;
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onChangeFilter={onFilterChangeHandler}
        />
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
