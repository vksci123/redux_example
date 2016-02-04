import React from 'react'

import { render } from 'react-dom' 

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './redux/containers/App' 
import incrementCount from './redux/reducers/CounterReducer'


let store   =   createStore(incrementCount) 

render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root') 
)
