import { RAWDECREASE, RAWINCREASE } from "./rawCounterActionTypes";

const initialState = {
    value: 0
}


export const rawCounterReducer = (state = initialState, action)=> {
    switch (action.type) {
        case RAWINCREASE:
            return {
                ...state, 
                value: state.value + action.payload 
            }
            
        case RAWDECREASE:
            return {
                ...state,
                value: state.value - 10
            }
    
        default:
            return state
    }
}

