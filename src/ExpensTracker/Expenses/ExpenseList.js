import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'
export const ExpenseList = props => {

    if (props.items.length === 0) {
        return <p className="expenses-list__fallback">NO Expenses Available</p>
    }
    return <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem

                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>

}