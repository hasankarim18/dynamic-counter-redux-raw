import { DDECREASE, DINCREASE } from "./dCounterActionTypes"


export const dIncrease = (value)=> {
    return {
        type:DINCREASE, 
        payload:value 
    }
}

export const dDecrease = (value)=> {
    return {
        type:DDECREASE,
        payload:value 
    }
}

