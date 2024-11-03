export const proCastinate=()=> {
    const startNow = confirm("Do you want to start now or want to procrastinate?");
    if (!startNow) {
        return "I will start tomorrow";
    }else{
        alert("Good decision!")
    }
    
    const sureToStart = confirm("Are you sure you want to start now?");
    if (sureToStart) {
        alert("I will strt now");
    } else {
        alert("I will start tomorrow");
    }
}