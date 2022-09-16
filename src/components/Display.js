import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  width: 100%;
  height: 288px;
  padding-top: 77px;
  font-size: 48px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DisplayFormula = styled.div`
  word-break: break-all;
  overflow-y: scroll;
`;
const DisplayResult = styled.div`
  padding-bottom: 20px;
`;

function Display() {
  return (
    <DisplayContainer>
      <DisplayFormula>1,000+10.2+1312312312312312312</DisplayFormula>
      <DisplayResult>123129482</DisplayResult>
    </DisplayContainer>
  );
}

export default Display;
