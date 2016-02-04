import React, { PropTypes } from 'react'


const Counter   =   ({ onClickIncrement, onClickDecrement, counter })  => (
        <div> 
            Hello Current Counter : {counter}
            <input type="button" value="Increment" onClick={() => {onClickIncrement()}} /> 
            <input type="button" value="Decrement" onClick={() => {onClickDecrement()}} /> 
        </div>
    )

export default Counter 
