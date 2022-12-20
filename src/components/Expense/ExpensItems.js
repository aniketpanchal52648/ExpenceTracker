
import ExpenseDate from './ExpensesDate';
import Card from '../card';
import './ExpensesItem.css';

function ExpensItems(props) {
//     const [title,setTitle]=useState(props.title);
// function clickHandler(){
//     setTitle('updated!!');
//     console.log("Updated!!!");
// };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button>click me</button>
            </div>
        </Card>
    )
}

export default ExpensItems;