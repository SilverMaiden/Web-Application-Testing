import React, {useEffect, useRef} from 'react';

const Display = (props) => {
    useEffect(() => {
        console.log('update');
        console.log(props.strikes);

    })

    return (
        <div>
            Hi, I'm the display for BASEBALL YO.
            <h1> BALLS: </h1>
            <p>{props.balls}</p>
            <h1> STRIKES: </h1>
            <p ref={props.valueRef}> {props.strikes}</p>
            {console.log(props.strikes, props.balls)}

            <input type="button" name="button" value="strike" onClick={() => props.handleClick("strike")} />
            <button name="ball" onClick={() => props.handleClick}>Ball</button>
            <button name="foul" onClick={props.handleClick}>Foul</button>
            <button name="hit" onClick={props.handleClick}>Hit</button>

        </div>
    )
}

export default Display;
