import React, {useState, useEffect, useRef} from 'react';
import Display from './Display';


const CountRules = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    /*

    const valueRef = useRef();
    useEffect(() => {
        console.log(strikes);
    }, [strikes])
    */

    //clicks: strike, ball, foul, hit
    const handleClick = e =>{
        let input = e;
        console.log(input + " is the value");
        switch(input) {
            case "foul":
                if (strikes < 2) {
                    setStrikes(strikes + 1);
                }
            case "ball":
                setBalls(balls + 1);
            case "strike":
                if (strikes < 3) {
                    setStrikes(strikes +1);
                    console.log("this should really set strikes.")
                    console.log(strikes);
                    this.forceUpdate();
            }
            case "hit":
                setStrikes(strikes - strikes);
                setBalls(balls - balls );
        }
    }

    return(
        <Display handleClick={handleClick} balls={balls} strikes={strikes} valueRef={valueRef} />

    )

}

export default CountRules;

