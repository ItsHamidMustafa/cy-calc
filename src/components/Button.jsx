import React, { useContext } from 'react'
import { screenContext } from '../context/context'

export const Button = (props) => {
    const { screen, setScreen } = useContext(screenContext);
    // const [exp, setExp] = useState('');

    const handleClick = (e) => {
        const label = e.target.innerText;


        if (label === 'AC') {
            setScreen(0);
            // setExp(0);
            return 1;
        }

        // if (label === '÷') {
        //     setExp(prevExp=>prevExp+=label)
        //     console.log("Divide 1 " + exp)
        // }

        if (screen === 0) {
            setScreen(label)
            // setExp(label)
            // console.log("screen === 0: " + exp)
        } else if (label === '=') {
            try {
                let result = eval(screen.replace(/÷/g, "/").replace(/×/g, "*"));
                setScreen(result);
                // console.log("Result: " + exp)
                // setExp('');
            } catch (error) {
                setScreen('Error');
            }
        } else {
            setScreen(prevScreen => prevScreen + label);
            // if (label === '÷') {
            //     console.log("Divide in else Label " + label)
            //     console.log("Divide in else: " + exp)
            // }
            // setExp( exp + label)
            // console.log(exp)
        }
    }

    return (
        <>
            <button className={props.className + ' btn'} onClick={handleClick}>{props.label}</button>
        </>
    )
}

Button.defaultProps = {
    className: 'btn'
};