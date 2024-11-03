import { getDistractions } from "./disTractions";

export const getConfirmation=()=>{
    const isComplete =confirm("Are you sure you completed the task?");
    if(isComplete){
        const confirmAgain=confirm("Are you sure?");
        if(confirmAgain){
            alert("Great! You are doing well");
            return true;
    }
    else{
        alert("Good Choice! Keep up the good work");
        getDistractions();
        return false;
    }}
}