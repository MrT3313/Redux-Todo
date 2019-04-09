// DEPENDENCIES
    import React, { Componetn } from 'react';
    import { connect } from 'react-redux';

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
            <h2>Hello From Inside ToDoList</h2>
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