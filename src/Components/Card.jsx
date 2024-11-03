import React from "react";
import { complete, deleteIcon, start } from "../assets/assets";
import "./Card.css";
import { proCastinate } from "../utils/proCastinate";
import { getDistractions } from "../utils/disTractions";
import { getConfirmation } from "../utils/getConfirmation";

function Card(props) {

    const [Clicked, setClicked] = React.useState(false);
    const [isComplete, setIsComplete] = React.useState(false);
    return (
        <div className={`card ${Clicked ? "click" : ""} ${isComplete ? "complete" : ""}`}>
            <button onClick={() => {
                if (getConfirmation()) {
                    setIsComplete(true);
                    props.task("nothing");
                }
            }}>
                <img src={complete} alt="Complete" />
            </button>
            <p>{props.todo.name}</p>
            <div className="card-sbutton">
                <button
                    onClick={() => {
                        if (!proCastinate()) props.task(props.todo.name);
                        setClicked(true);

                        let n = Math.floor(Math.random() * 50);
                        console.log("randoomm: ", n);
                        const intervalId = setInterval(() => {
                            if (n > 0) {
                                n--;
                            } else {
                                getDistractions();
                                clearInterval(intervalId);
                            }
                        }, 2000);
                    }}
                >
                    <img src={start} alt="Start" />
                </button>
                <button onClick={() => {
                    props.delete(props.todo.id);
                    console.log(props.todo);
                }}>
                    <img src={deleteIcon} alt="Delete" />
                </button>
            </div>
        </div>
    );
}

export default Card;
