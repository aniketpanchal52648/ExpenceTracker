import React,{useState} from 'react';
import './NewExpenceForm.css';
function NewExpenceForm(props){
    const [newTitle,setnewTitle]=useState('');
    const [newAmount,setnewAmout]=useState('');
    const [newDate,setnewDate]=useState('');
    // const titleHandler=(event)=>{
    //     console.log(event.target.value);
    //     setnewTitle(event.target.value);
    // }
    //multiple event handler in one state
    // const [userInput,setuserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmout:''
    // })
    const titleHandler =(event)=>{
        setnewTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value

        // })
        //inseted of this we can pass fucntion to do this and function will have previous state as 
        // argument pass to it will protect from anamolies
        // setuserInput((prevS)=>{
        //    return {...prevS,
        //     enteredTitle:event.target.value};

        // })
    }
    const amountHandler=(event)=>{
        setnewAmout(event.target.value);
    }
    const dateHandler=(event)=>{
        setnewDate(event.target.value);
    }
    const formAction=(event)=>{
        event.preventDefault();
        const newData={
            title:newTitle,
            date: new Date(newDate),
            amout:newAmount
        }
        // console.log(newData)
        //here onSaveData is prop function which is again call the function
        //which define for onSaveData and we have pass newdata as argument which enables us to 
        // pass data from child to parent  
        props.onSaveData(newData);
        setnewAmout('');
        setnewDate('');
        setnewTitle('');
    }
    return (
        <form className="new-expense__controls " onSubmit={formAction}>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={newAmount} onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateHandler}></input>
            </div>
            <button type='submit'>Add Expence</button>
        </form>
    );
};
export default NewExpenceForm;