// DEPENDENCIES
    import React, { Component } from 'react'
    import { connect } from 'react-redux'

// COMPONENTS

// IMPORT ACTION CREATOR FUNCTIONS
    import { complete_todo } from '../actions'

// MATERIAL UI
    import { Card } from '@material-ui/core'

// Styled Components
    import styled from 'styled-components'

// CSS 
    import '../index.css'

const Wrapper_Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0px 20px;

    div {
        display: flex;
        justify-content: space-around;

        width: 20%;

        font-size: 25px;
    }
`;

class ToDoCard extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         key: undefined
    //     }
    // }
    // INVOKE PASSED ACTION CREATORS ON USER INTERACTION
    call_COMPLETE_ToDo = e => {
        e.preventDefault()
        console.log('invoke ACTION CREATOR: COMPLETE_TODO inside ToDoCard')
        console.log('pass ', this.props.todo)
        this.props.complete_todo(this.props.todo)
    }

    call_REMOVE_ToDo = e => {
        e.preventDefault()
        console.log(this.props)
        console.log('invoke ACTION CREATOR: DELETE inside ToDoCard')
        
    }

    renderClassName(passedToDo) {
        console.log(passedToDo)
        return passedToDo.completed === true ? 'completed_TRUE' : 'completed_FALSE'
    }

    render() {
        return (
            <Card>
                {/* <Wrapper_Card className={this.renderClassName(this.props.todo)}> */}
                <Wrapper_Card className={this.props.todo.completed ? 'completed_TRUE' : 'completed_FALSE'}>
                    <h2>
                        {this.props.todo.input_newToDo}
                    </h2>
                    <div>
                        <i 
                            onClick={this.call_COMPLETE_ToDo}
                            class="far fa-check-square"
                        ></i>
                        <i 
                            onClick={this.call_REMOVE_ToDo}
                            class="fas fa-minus-circle"
                        ></i>
                    </div>
                </Wrapper_Card>
            </Card>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        todos: state.todos
    }
}

export default connect (mapStateToProps, { complete_todo })(ToDoCard)