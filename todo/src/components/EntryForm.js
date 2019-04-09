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


const Form_styles = styled.div`
    display: flex;
    margin: 0 auto;

    color: orange;

    form {
        display: flex;
        justify-content: space-around;
        align-items: center;

        margin: 20px 0px;
    }
`;
class EntryForm extends Component {
    constructor(props) {
        super(props)
    }

    // INVOKE PASSED ACTION CREATORS ON USER INTERACTION
    methodToInvoke_AC() {
        // Placehoder - CHANGE THIS
    }

    render() {
        return (
            <Form_styles>
                <Paper>
                    <h2>Enter New ToDo Item</h2>
                    <form>
                        <TextField
                            id='ToDo_String'
                            label="Enter ToDo Item"
                        >
                        </TextField>
                        <Button
                            // ADD ONCLICK
                        >
                            Add This ToDo
                        </Button>
                    </form>
                </Paper>
            </Form_styles>
        )
    }
}

// MAP STATE TO PROPS
    const mapStateToProps = (state) => {
        return {

        }
    }

// INVOKE CONNECT
    export default connect(mapStateToProps, { add_todo })(EntryForm)