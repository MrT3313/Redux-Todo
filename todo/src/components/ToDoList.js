// DEPENDENCIES
    import React, { Component } from 'react';
    import { connect } from 'react-redux'

// COMPONENTS
    import EntryForm from './EntryForm'
    import ToDoCard from './ToDoCard'

// Styled Components
    import styled from 'styled-components'


const Wrapper_ToDoList = styled.div`
    display: flex;
    flex-direction: column;
`;

class ToDoList extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        // FALSE
            const completed_FALSE_array = this.props.todos.filter( todo => todo.completed === false)
                console.log(completed_FALSE_array)
                
            const default_FALSE_Obj = {
                input_newToDo: 'No Tasks Listed - LIST SOME STUFF',
                completed: false,
                id: 0
            }

        // TRUE
            const completed_TRUE_array = this.props.todos.filter( todo => todo.completed === true )
            console.log(completed_TRUE_array)

            const default_TRUE_Obj = {
                    input_newToDo: 'NONE - GET TO WORK!',
                    completed: false,
                    id: 0
            }

        return (
            <Wrapper_ToDoList>
                <EntryForm />
                <h2>Task List:</h2>
                    {completed_FALSE_array.length === 0 ?
                        <ToDoCard todo={default_FALSE_Obj}/>
                        :
                        completed_FALSE_array.map( todo => <ToDoCard todo={todo}/> )
                    }

                <h2>Tasks YOU have completed:</h2>
                    {completed_TRUE_array.length === 0 ? 
                        <ToDoCard todo={default_TRUE_Obj}/>
                        :
                        completed_TRUE_array.map( todo => <ToDoCard todo={todo}/> )
                    }
            </Wrapper_ToDoList>
        )
    }
}


// MAP STATE TO PROPS
    const mapStateToProps = ({ todos }) => {
        return {
            todos
        }
    }


// // // INVOKE CONNECT 
    export default connect(mapStateToProps, null)(ToDoList)