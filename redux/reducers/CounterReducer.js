import { INCREMENT , DECREMENT} from "../actions/CounterAction" 

const counter =   0 ;

function incrementCount(state=counter, action)  {
    switch(action.type) {
        case INCREMENT: 
            return state + 1
        case DECREMENT: 
            return state - 1
        default: 
            return state 
    }
}



export default incrementCount

