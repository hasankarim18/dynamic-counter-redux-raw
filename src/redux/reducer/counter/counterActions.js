import { DECREMENT, INCREMENT } from "./counterActionTypes"


export const counterIncrement = (value)=> {
    const newValue = value + 0
    return  {
        type:INCREMENT,
        payload:newValue
    }
}

export const counterDecrement = (value)=> {
    return {
        type:DECREMENT,
        payload:value
    }
}