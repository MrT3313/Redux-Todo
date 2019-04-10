// IMPORT ACTION CREATORS
    import { ADD_TODO, COMPLETE_TODO } from '../actions'

// STEP 4 -> SET INITIAL STATE
const initialState = {
    todos: [
        // {
        //     value: 'Walk the dog',
        //     completed: false
        // }
    ]
}


// STEP 5 -> CREATE REDUCER
export default (state = initialState, action) => {
    //DEBUGGING 
        console.log('in REDUCER -> what ACTION recieved', action)
    
        switch(action.type) {
            case ADD_TODO:
                console.log('in REDUCER -> what PAYLOAD recieved', action.payload)

                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            
            case COMPLETE_TODO:
                console.log(action.payload)
                return {
                    ...state,
                    
                }
            default:
                return state
        }
}
