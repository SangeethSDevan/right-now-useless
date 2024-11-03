import React from 'react'
import { deleteIcon } from '../assets/assets'
import "./Card.css"
import {proCastinate} from '../utils/proCastinate'
import { getDistractions } from '../utils/disTractions'

function Card(props) {
  return (
    <div className='card'>
        <p>{props.name}</p>
        <button onClick={()=>{
            proCastinate();

            let n = Math.floor(Math.random() * 50);
            console.log("randoomm: ",n)
            const intervalId = setInterval(() => {
                if (n > 0) {
                    n--;
                } else {
                    getDistractions();
                    clearInterval(intervalId);
                }
            }, 2000);
        }}>Start</button>
        <button>
                <img src={deleteIcon} alt="Delete" />
        </button>
    </div>
  )
}

export default Card