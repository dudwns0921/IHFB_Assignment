import React, {useEffect, useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import reset from 'styled-reset';
import Display from './components/Display';
import KeypadTop from './components/KeypadTop';
import KeypadBottom from './components/KeypadBottom';
import NotoSansRegular from './asset/fonts/NotoSansKR-Thin.otf';
import {DARK_COLORS} from './constants/constants';
import {initCal} from './util';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansKR-Regular';
    src: url(${NotoSansRegular});
  }
  ${reset}
  * {
    box-sizing: border-box;
  }
`;
const AppContainer = styled.div`
  font-family: 'NotoSansKR-Regular';
  color: white;
  background-color: ${DARK_COLORS.dark_gray100};
  width: 360px;
  height: 800px;
  padding: 0 15px;
`;

const Divider = styled.div`
  height: 1px;
  margin: 17px 5px 25px 5px;
  background-color: ${DARK_COLORS.dark_gray200};
`;

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initCal();
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles />
      {loading ? (
        'Loading...'
      ) : (
        <AppContainer>
          <Display></Display>
          <KeypadTop></KeypadTop>
          <Divider></Divider>
          <KeypadBottom></KeypadBottom>
        </AppContainer>
      )}
    </React.Fragment>
  );
}

export default App;
