// DEPENDENCIES
    import React, { Component } from 'react';
    import { connect } from 'react-redux';

// COMPONENTS
    import EntryForm from './EntryForm'

// MATERIAL UI
    import { Card } from '@material-ui/core'

// IMPORT ACTION CREATOR FUNCTIONS
// -> pass into CONNECTION function
// --> by doing ^ they will appeat on PROPS
    
    // --> DONT NEED add_todo on list --> import { add_todo, complete_todo } from '../actions'
    import { complete_todo } from '../actions'

class ToDoList extends Component {
    constructor(props) {
        super(props)

    }

    // INVOKE PASSED ACTION CREATORS ON USER INTERACTION
    methodToInvoke_AC() {
        // Placehoder - CHANGE THIS
    }

    render() {
        return (
            <>
            <EntryForm />
            <Card>
                <h2>Hello From Inside (APP -> ToDoList)</h2>
            </Card>
            </>
        )
    }
}


// MAP STATE TO PROPS
    const mapStateToProps = (state) => {
        return {
            
        }
    }


// INVOKE CONNECT 
    export default connect(mapStateToProps, {complete_todo})(ToDoList)