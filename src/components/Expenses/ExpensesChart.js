import React from 'react'
import Chart from '../Chart/Chart'

function ExpensesChart(props) {
    const chartDataPoints = [
        {label:'Janurary',value:0},
        {label:'February',value:0},
        {label:'March',value:0},
        {label:'April',value:0},
        {label:'May',value:0},
        {label:'June',value:0},
        {label:'Julay',value:0},
        {label:'August',value:0},
        {label:'September',value:0},
        {label:'October',value:0},
        {label:'November',value:0},
        {label:'December',value:0},
    ]; 
    for(const expense of props.expenses){
         const expenseMonth  = expense.date.getMonth();
         chartDataPoints[expenseMonth].value +=expense.amount; 
    }
  return (
    <div>
        <Chart dataPoints = {chartDataPoints} />
    </div>
  )
}

export default ExpensesChart