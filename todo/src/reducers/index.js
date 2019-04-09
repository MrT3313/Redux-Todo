// IMPORT ACTION CREATORS
    import { ADD_TODO, COMPLETE_TODO } from '../actions'

// STEP 4 -> SET INITIAL STATE
const initialState = {
    todos: []
}


// STEP 5 -> CREATE REDUCER
export default (state = initialState, action) => {
    //DEBUGGING 
        console.log(action)
    
        switch(action.type) {
            case ADD_TODO:
                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            
            case COMPLETE_TODO:
                return {
                    ...state,
                    
                }
            default:
                return state
        }
}
