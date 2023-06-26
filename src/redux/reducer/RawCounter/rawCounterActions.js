import { RAWDECREASE, RAWINCREASE } from "./rawCounterActionTypes"


export const rawIncrease = (value)=> {
    
    return {
        type:RAWINCREASE,
        payload:value 
    }
}


export const rawDecrease = (value)=> {
    return {
        type:RAWDECREASE, 
        payload:value
    }
}