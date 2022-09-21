import React from 'react';
import {useSelector} from 'react-redux';
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

function Display() {
  const formula = useSelector(state => state.formula.value);
  const result = useSelector(state => state.result.value);

  return (
    <DisplayContainer>
      <DisplayFormula>{formula}</DisplayFormula>
      <DisplayResult>{result}</DisplayResult>
    </DisplayContainer>
  );
}

export default Display;
