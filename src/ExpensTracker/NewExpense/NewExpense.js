import { useState } from 'react'
import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'
export const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    
    const startEditinghandler = () => {
        setIsEditing(true)
    }
    const stopEditing=()=>{
        setIsEditing(false)
    }
    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditinghandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditing}/>}
        </div>
    )
}