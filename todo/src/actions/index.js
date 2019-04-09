// STEP 6 -> Create Action Types
    export const ADD_TODO = 'ADD_TODO';
    export const COMPLETE_TODO = 'COMPLETE_TODO'


// STEP 7.1 -> Create Action Creator
    export const add_todo = (new_ToDo) => {
        // DEBUBGGING
        console.log('in add_todo ACTION CREATOR: Passed New ToDo = ',new_ToDo)

        // STEP 8.1 -> Return an Action
        return {
            type: ADD_TODO,
            payload: newToDo
        }
    }

// STEP 7.2 -> Create Action Creator
    export const complete_todo = (selected_ToDo) => {
        // DEBUGGING
        console.log('in complete_to ACTION CREATOR: Passed selected ToDo', selected_ToDo)

        // Step 8.1 -> Return in Action
        return {
            type: COMPLETE_TODO,
            payload: selected_ToDo 
        }
    }


// *** CONNECTIONS *** //

// EXPORT -- ACTION CREATOR functions
// IMPORT -- @ appropriate component CONNECT FUNCTION 