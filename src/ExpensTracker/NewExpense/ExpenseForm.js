import { useState } from 'react'
import './ExpenseForm.css'
export const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    //     enteredAmount: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value }
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: +enteredAmount
        }
        props.onSaveExpenseData(expenseData);

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }


    return (
        <form onSubmit={submitHandler} action="">

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label for="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label for="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>

        </form>
    )
}