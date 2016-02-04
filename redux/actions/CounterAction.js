
// Action type 
export const INCREMENT =   "INCREMENT"
export const DECREMENT =   "DECREMENT"

// Action Creators

export function incrementCounter() {
    return {
        "type": INCREMENT 
    }
}

export function decrementCounter() {
    return {
        "type": DECREMENT 
    }
}
