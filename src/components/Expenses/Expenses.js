import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const onSelectHandler = (year) => {
    console.log(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onSelect={onSelectHandler}></ExpensesFilter>
      {props.items.map((items) => {
        return (
          <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
