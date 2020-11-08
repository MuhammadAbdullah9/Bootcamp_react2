import React, { useState } from 'react'
import './App.css';

function State() {

    let [current, changeTo] = useState(true)
    let [temp, setTemp] = useState(22)

    return (
        <div className={`${current ? "lightsOn" : "lightsOff"}`}>

            <p>May you please turn the lights on ?  </p><button onClick={() => changeTo(current = true)}>ON</button>
            <p>May you please turn the lights off ?  </p><button onClick={() => changeTo(current = false)}>OFF</button>
            <br />

            <hr />

            <h3>Current temperature : {temp}</h3>
            <button onClick={() => setTemp(++temp)}>+</button>
            <button onClick={() => setTemp(--temp)}>-</button>



        </div>
    )
}

export default State;