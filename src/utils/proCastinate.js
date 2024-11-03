import { getDistractions } from "./disTractions";
import { getRandomVideo } from "./randVideos";

export const proCastinate=()=> {
    const startNow = confirm("Do you want to start now or take a rest?");
    if (!startNow) {
        alert("Good Choice!\nIf tomorrow isn't the due date,then today isn't the do-date");
        getRandomVideo();
            return true;
    }else{
        const sureToStart = confirm("Are you sure you want to start now?");
        if (sureToStart) {
            alert(getDistractions());
            const final=confirm("Are you sure you want to start now?");
            if(final){
                alert("Good Luck! You will do great");
                return false;
            }else{
                alert("Good Choice!\nIf tomorrow isn't the due date,then today isn't the do-date");
                getRandomVideo();
                return true;
            }
        } else {
            alert("I will start tomorrow");
            getRandomVideo();
            return true;
        }
    }
}