// IMPORT ACTION CREATORS
    import { ADD_TODO, COMPLETE_TODO } from '../actions'

// STEP 4 -> SET INITIAL STATE
const initialState = {
    todos: []
}

// ID COUNTER FOR PROPER COMPLETE / DELETE
let idCounter = () => {
    let id = 0;
    return function() {
        return id++;
    };
};
const idUp = idCounter();


// STEP 5 -> CREATE REDUCER
export default (state = initialState, action) => {
    //DEBUGGING 
        console.log('in REDUCER -> what ACTION recieved', action)
    
        switch(action.type) {
            case ADD_TODO:
                console.log('in REDUCER -> what PAYLOAD recieved', action.payload)


                return {
                    ...state,
                    todos: [...state.todos, {...action.payload, id:idUp()}]
                }
            
            case COMPLETE_TODO:
                
                console.log('PAYLOAD = ', action.payload)
                console.log('PAYLOAD ID = ', action.payload.id)
                console.log('STATE.TODOS pre filter = ', state.todos)

                const newArray = state.todos.map( todo => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !action.payload.completed
                        console.log(todo)
                        console.log(todo.completed)
                    }
                    return {
                        // WORKS
                            // ...newArray
                        // WORKS
                            ...state
                    
                    }
                })

                // return {
                    // WORKS
                        // ...state
                    // DOES NOT WORK
                        // ...newArray
                // }
                
            
                

                // return {
                //     ...state,
                //     [action.payload.completed]: {completed: !action.payload}
                //     // todos: [...state.todos, {...action.payload, completed: !action.payload.completed}]
                // }
            default:
                return state
        }
}
