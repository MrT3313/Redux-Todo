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

                console.log('STATE.TODOS pre filter = ', state.todos)
                

                // MAKE NEW OBJECT FOR STATE 
                const NewStateObject_toPass = state.todos.filter( todo => todo.input_newToDo !== action.payload.input_newToDo )
                console.log('that NEW NEW state.todos TO PASS', NewStateObject_toPass)

                return {
                    ...state,
                    todos: NewStateObject_toPass
                }
            default:
                return state
        }
}
