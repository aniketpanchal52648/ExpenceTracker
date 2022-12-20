import React, { useState } from "react";
import ExpensItems from './ExpensItems';
import Card from '../card';
import './Expenses.css';
import ExpenceFilter from "./ExpenceFilter";
import Chart from "../Charts/Chart";



function Expense(props) {
  const data_Points=[
    {label:'Jan', value:0},
    {label:'Feb', value:0},
    {label:'Mar', value:0},
    {label:'Apr', value:0},
    {label:'May', value:0},
    {label:'Jun', value:0},
    {label:'Jul', value:0},
    {label:'Aug', value:0},
    {label:'Sep', value:0},
    {label:'Oct', value:0},
    {label:'Nov', value:0},
    {label:'Dec', value:0}
  ]

  const [filteredYear, setfilterYear] = useState('2020');
  const changeYear = (newYear) => {
    setfilterYear(newYear);
  }
  const newArray = props.items.filter((expence) => { return expence.date.getFullYear().toString() === filteredYear });
  for(const data of newArray){
    let index=data.date.getMonth();
    data_Points[index].value +=data.amount;
  }
  // console.log(data_Points);  
  let expenses="no record found";
  if(newArray.length>0){
    expenses=newArray.map((expence) => (
      <ExpensItems  key={expence.id}title={expence.title} amount={expence.amount} date={expence.date} />
    ))
  }
  return (
    <Card className="expenses">
      <ExpenceFilter selected={filteredYear} onChangeFilter={changeYear} />
      <Chart dataPoints={data_Points}/>

      {expenses}

    </Card>

  )
}
export default Expense;