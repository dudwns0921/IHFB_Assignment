import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import reset from 'styled-reset';
import Display from './components/Display';
import KeypadTop from './components/KeypadTop';
import KeypadBottom from './components/KeypadBottom';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;
const AppContainer = styled.div`
  background-color: black;
  width: 360px;
  height: 800px;
  padding: 0 15px;
`;

const Divider = styled.div`
  height: 1px;
  margin: 17px 5px 25px 5px;
  background-color: #242424;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppContainer>
        <Display></Display>
        <KeypadTop></KeypadTop>
        <Divider></Divider>
        <KeypadBottom></KeypadBottom>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
