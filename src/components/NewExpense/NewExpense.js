import React from "react";

import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {


        const UserinputHandler = (expenses) => {
                props.onaddExpense(expenses);
        };

        return <div className='new-expense'>
                <ExpenseForm onUserinput={UserinputHandler} />
        </div>
};

export default NewExpense;