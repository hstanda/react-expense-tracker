import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddingExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddedExpenseData={saveExpenseData} />
    </div>
  );
};
export default NewExpense;
