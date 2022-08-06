const ExpenseFormContent=props=>{
    
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
                <div>
                    <button type='submit' onClick={closeForm}>Add Expense</button>
                </div>
                <div>
                    <button type='cancel' onClick={closeForm}>Cancel</button>
                </div>
            </div>

        </form>
    )
}