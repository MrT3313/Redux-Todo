// DEPENDENCIES
    import React, { Component } from 'react';
    import { connect } from 'react-redux'
    
// IMPORT ACTION CREATOR FUNCTIONS
    import { add_todo } from '../actions'

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
            <h2>Hello From Inside Entry Form</h2>
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