// DEPENDENCIES
    import React from 'react';
    import ReactDOM from 'react-dom';

// REDUX
    import { createStore } from 'redux'
    import { Provider } from 'react-redux'

// REDUCERS
    import reducer from './reducers'
    
// COMPONENTS
    import App from './App';


// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

// STEP 1 -> Create Store
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(
// STEP 2 -> Wrap <App /> inside of PROVIDER
// STEP 3 -> Pass in STORE as PROPS into PROVIDER
    <Provider store={store}>  
        <App /> 
    </Provider>,
    document.getElementById('root')
);


