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
        return (
            <Wrapper_ToDoList>
                <EntryForm />
                {this.props.todos.map( todo => <ToDoCard todo={todo}/> )}
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