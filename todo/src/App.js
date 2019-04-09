// DEPENDENCIES
  import React, { Component } from 'react';

// COMPONENTS
  import ToDoList from './components/ToDoList'

// Styled Components
  import styled from 'styled-components'

const Wrapper_app = styled.div`
  display: flex;
  flex-direction: column;

`;
class App extends Component {
  render() {
    return (
      <Wrapper_app>
          <h2>Hello from Inside REDUX app</h2>
          <ToDoList />
      </Wrapper_app>
    );
  }
}

export default App;
