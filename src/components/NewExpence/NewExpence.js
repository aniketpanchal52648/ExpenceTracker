import React,{useState} from "react";
import NewExpenceForm from "./NewExpenceForm";
import './NewExpence.css'
import ExpenceFilter from "../Expense/ExpenceFilter";
function NewExpence(props){
    const [filteredYear,setfilterYear]=useState('2020');
    const dataExtract= data =>{
        props.onData(data);
    }
    const changeYear =(newYear)=>{
        setfilterYear(newYear);
    }
    return (
        <div className="new-expense">
            <NewExpenceForm onSaveData={dataExtract}/>
            <ExpenceFilter selected={filteredYear} onChangeFilter={changeYear}/>
        </div>
    );
}
export default NewExpence;