import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../asset/images/delete.svg';

const KeypadTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 38px;
`;

const ModeBtn = styled.div`
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  background-image: url(${deleteIcon});
  width: 29px;
  height: 19.95px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

function KeypadTop() {
  return (
    <KeypadTopContainer>
      <ModeBtn>🌝 라이트 모드</ModeBtn>
      <DeleteBtn />
    </KeypadTopContainer>
  );
}

export default KeypadTop;
