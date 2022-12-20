import React,{useState} from "react";
import NewExpenceForm from "./NewExpenceForm";
import './NewExpence.css'


function NewExpence(props){
   
    const dataExtract= data =>{
        props.onData(data);
    }
    
    const [isEditing,setisediting]=useState(false);
    const changeState=()=>{
        setisediting(true);
    }
    // let component=AddExpence;
    
    // const [newComponent,setnewcomponent]=useState(<AddExpence/>);
    // function loadNewExpence(){
    //     setnewcomponent(<AddExpence/>);
    // }
    // function changeForm(event){
    //     event.preventDefault();
    //     // console.log(newComponent.type.name);
    //     if(newComponent.type.name==="AddExpence"){
    //         // console.log("change123")
    //         setnewcomponent(<NewExpenceForm onSaveData={dataExtract} returnNewExpence={loadNewExpence}/>);
    //     }else{
    //         // console.log("change")
    //         setnewcomponent(<AddExpence/>);
    //     }
    // }
    // const changeComponent =()=>{
    //     setnewcomponent(<NewExpenceForm onSaveData={dataExtract}/>);
    // }
    const loadAgain=(event)=>{
        setisediting(false);
    }
    
   
    
    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={changeState} >Add New Expence</button>}
            {isEditing && <NewExpenceForm onSaveData={dataExtract} returnNewExpence={loadAgain}></NewExpenceForm>}
           
        </div>
    );
}
export default NewExpence;