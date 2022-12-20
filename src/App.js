
import React, { useState } from "react";
import Expense from "./components/Expense/Expences";
import NewExpence from "./components/NewExpence/NewExpence";

const DUMMY_LIST = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e7',
    title: 'Note books',
    amount: 100,
    date: new Date(2020, 12, 14),
  },{
    id: 'e8',
    title: 'Recharge',
    amount: 234,
    date: new Date(2020, 3, 14),
  },{
    id: 'e10',
    title: 'Bed',
    amount: 300,
    date: new Date(2020, 9, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Book',
    amount: 12.55,
    date: new Date(2021, 23, 12)
  }
];

function App(props) {

  const [expences, setExpences] = useState(DUMMY_LIST);
  const extractData = (expence) => {
    // console.log(expence);
    setExpences((preExpences) => {
     
      return [expence, ...preExpences];
    });
  }
  return (
    <div>
      <NewExpence onData={extractData} />
      <Expense items={expences} />

    </div>
  );
}

export default App;
