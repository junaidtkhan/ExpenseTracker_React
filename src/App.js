import React from 'react';
import './App.css';
import { MovieComponent } from './MovieStore/Moviecomponents';
import { Colorizer } from './colorize/colorize';
import { Incrementer } from './Incrementer/incrementer';
import ExpenseItem from './ExpensTracker/ExpenseItem';
function App() {



  return (

    <div className='App'>
      <h2>Hello</h2>
<ExpenseItem/>
    </div>
  );
}

export default App;
