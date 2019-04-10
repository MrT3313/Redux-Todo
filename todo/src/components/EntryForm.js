// DEPENDENCIES
    import React, { Component } from 'react';
    import { connect } from 'react-redux'
    
// IMPORT ACTION CREATOR FUNCTIONS
    import { add_todo } from '../actions'

// MATERIAL UI
    import { 
        Paper, TextField, Button
    } from '@material-ui/core'

// Styled Components
    import styled from 'styled-components'


const Wrapper_Form = styled.div`
    display: flex;
    flex-direction: column;

    width: 400px;
`;
const EntryForm_Title = styled.h2`
    text-align: center;
`;
const Form_Bottom = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 20px 0px;
`;
class EntryForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input_newToDo: undefined,
            completed: false
        }
    }

    changeHandler_textField = e => {
        this.setState({
            input_newToDo: e.target.value
        })
    }

    // INVOKE PASSED ACTION CREATORS ON USER INTERACTION
    call_ADD_ToDo = e => {
        e.preventDefault()
        console.log('INVOKE ACTION CREATOR and send [', this.state.input_newToDo, '] to AC')
        this.props.add_todo(this.state)
    }

    render() {
        return (
            <Paper>
                <Wrapper_Form>
                    <EntryForm_Title>
                        Enter New ToDo Item
                    </EntryForm_Title>
                    <Form_Bottom>
                        <TextField
                            id='ToDo_String'
                            label="Enter ToDo Item"
                            onChange={this.changeHandler_textField}
                        >
                        </TextField>
                        <Button
                            onClick={this.call_ADD_ToDo}
                        >
                            Add This ToDo
                        </Button>
                    </Form_Bottom>
                </Wrapper_Form>
            </Paper>
        )
    }
}

// MAP STATE TO PROPS
    const mapStateToProps = (state) => {
        return {
            todos: state.todos
        };
    }

// INVOKE CONNECT
    export default connect(mapStateToProps, { add_todo })(EntryForm)