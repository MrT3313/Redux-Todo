// IMPORT ACTION CREATORS


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
                    
                }
            
            case COMPLETE_TODO:
                return {

                }
            default:
                return state
        }
}
