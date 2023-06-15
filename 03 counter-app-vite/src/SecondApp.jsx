import React from "react";
import PropTypes, { func } from 'prop-types'
import { useState } from "react";

export const AppThree = (props) => {
    const { firstParam } = props;
    const [counter, setCounter] = useState(firstParam);

    const onClickIncrese = (event)=>{        
        setCounter(counter + 1);
    }

    const onClickDecrese = (event)=>{        
        setCounter(counter - 1);
    }

    const onClickResetValue = (event)=>{        
        setCounter(firstParam);
    }

    return (
        <>
            <h1>My new App doing by myselft</h1>
            <h1>firstParam: {counter}</h1>
            <button onClick={ (event) => onClickIncrese(event) }>
                +1
            </button>
            <button onClick={ (event) => onClickResetValue(event) }>
                Reset
            </button>
            <button onClick={ (event) => onClickDecrese(event) }>
                -1
            </button>
        </>
    )
}

AppThree.propTypes = {
    firstParam: PropTypes.number.isRequired,
}

AppThree.defaultProps = {
    firstParam: 100,
}