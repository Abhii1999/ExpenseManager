import React ,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [newexpenses,setnewexpenses] = useState({
        id:Math.random(),
        title :'',
        amount :'',
        date : new Date()
    })

    const titleChangeHandler = (event) => {
        setnewexpenses({
            ...newexpenses,
            title:event.target.value
        })

    }
    
    const amountChangeHandler = (event) => {
        setnewexpenses({
            ...newexpenses,
            amount:event.target.value
        })

    }

    const dateChangeHandler = (event) => {
        setnewexpenses({
            ...newexpenses,
            date: new Date(event.target.value)
        })

    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onUserinput(newexpenses);
        setnewexpenses({
            title :'',
            amount :'',
            date : new Date()
            
        })
    }

    return <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} value={newexpenses.title} type='text'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} value={newexpenses.amount} type='number' min='0.01' step='0.01'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={newexpenses.date} type='date' min='2019-01-01' max='2023-12-31'></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

    </form>
}

export default ExpenseForm;