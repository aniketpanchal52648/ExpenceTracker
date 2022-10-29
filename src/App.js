

import Expense  from "./components/Expense/Expences";
import NewExpence from "./components/NewExpence/NewExpence";
import './index.css';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
  ];
  const extractData= data =>{
    console.log(data);
  }
  return (
   <div>
   <NewExpence onData={extractData}/>
    <Expense items={expenses}/>
   
   </div>
  );
}

export default App;
