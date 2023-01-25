import { DARK_MODE, LIGTH_MODE } from "../actions/actionNames";

const initialState = {
    darkMode: true
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case DARK_MODE: {
            return {
                ...state,
                darkMode: !state.darkMode
            }
        }
        case LIGTH_MODE: {
            return {
                ...state,
                darkMode: false
            }
        }
        default:
        return state;
    }
}

export default rootReducer;