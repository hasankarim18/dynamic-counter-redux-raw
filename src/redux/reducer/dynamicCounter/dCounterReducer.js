import { DDECREASE, DINCREASE } from "./dCounterActionTypes";


const initialState = {
    value: 20 
}

const dynamicCounterReducer = (state = initialState, action)=> {
    switch (action.type) {
        case DINCREASE:
            return {
                ...state, 
                value: state.value + action.payload
            }
        case DDECREASE: 
        return {
            ...state,
            value: state.value - action.payload
        }    
        default:
            return state
    }
}


export default dynamicCounterReducer;