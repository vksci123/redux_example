import React from 'react'
import { connect } from 'react-redux'


import  Counter from '../components/Counter' 
import {incrementCounter, decrementCounter} from '../actions/CounterAction'

// Connecting the component with the dispatch method so that it can dispatch actions 
let App   =   ({dispatch, counter}) => (
        <div className="counter_wrapper"> 
            <Counter counter={counter} onClickIncrement={() => {
                dispatch(incrementCounter()) 
            }} onClickDecrement={() => {
                dispatch(decrementCounter()) 
            }} /> 
        </div>
    )



const mapStateToProps = (state) => {
    return {
        counter : state
    }
}


// Actual Connection happens here 
App =   connect(mapStateToProps)(App)

export default App

