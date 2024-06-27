import React, { useContext } from 'react'
import { screenContext } from '../context/context'

export const Button = (props) => {
    const { screen, setScreen } = useContext(screenContext);
    const handleClick = (e) => {
        const label = e.target.innerText;


        if (label === 'AC') {
            setScreen(0);
            return 1;
        }
        if (screen === 0) {
            setScreen(label)
        } else if (label === '=') {
            try {
                let result = eval(screen.replace(/÷/g, "/").replace(/×/g, "*"));
                setScreen(result);
            } catch (error) {
                setScreen('Error');
            }
        } else {
            setScreen(prevScreen => prevScreen + label);
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