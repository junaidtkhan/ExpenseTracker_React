import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import './Expense.css'
import { Card } from "../UI/Card"
import { ExpensesFilter } from "./ExpenseFilter"
import { ExpenseList } from "./ExpenseList"
import { ExpenseChart } from "./ExpenseChart"
export const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const getYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filtererdList = props.items.filter(obj => {
        return obj.date.getFullYear().toString() === filteredYear
    })
    
    return (

        <Card className='expense'>
            <ExpensesFilter
                selected={filteredYear}
                onAddYear={getYear}
            />
            <ExpenseChart expenses={filtererdList}/>
            <ExpenseList items={filtererdList}/>
        </Card>

    )
}