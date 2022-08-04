import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {

    // const expenseDate=new Date(2012,2,28);
    // const expenseTitle='Car Insurance'
    // const expenseAmount=294.67
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>

    )
}
export default ExpenseItem