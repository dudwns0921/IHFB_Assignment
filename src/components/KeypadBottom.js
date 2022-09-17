import React from 'react';
import styled from 'styled-components';
import {DARK_COLORS, KEYS} from '../constants/constants';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {equal} from '../features/calculate/formulaSlice';
import Calculator from '../util/calculator';

const KeypadBottomContainer = styled.div`
  width: 100%;
  height: 358px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Btn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 31px;
  font-size: 32px;
  background: ${props => {
    switch (props.btnType) {
      case 'equal':
        return DARK_COLORS.dark_green100;
      default:
        return DARK_COLORS.dark_gray200;
    }
  }};
  border: 1px solid
    ${props => {
      switch (props.btnType) {
        case 'equal':
          return DARK_COLORS.dark_green200;
        default:
          return DARK_COLORS.dark_gray300;
      }
    }};
  color: ${props => {
    switch (props.btnType) {
      case 'sign':
        return DARK_COLORS.dark_green300;
      case 'clear':
        return DARK_COLORS.dark_red100;
    }
  }};
`;

function KeypadBtn({txt, btnType}) {
  const dispatch = useDispatch();
  const returnOnClickFunc = txt => {
    return function onClickFunc() {
      window.cal.insert(txt);
      dispatch(equal(window.cal.getFormula()));
    };
  };
  return (
    <Btn btnType={btnType} onClick={returnOnClickFunc(txt)}>
      {txt}
    </Btn>
  );
}

KeypadBtn.propTypes = {
  txt: PropTypes.string,
  btnType: PropTypes.string,
};

function KeypadBottom() {
  return (
    <KeypadBottomContainer>
      {KEYS.map(item => {
        return <KeypadBtn key={item.txt} txt={item.txt} btnType={item.type} />;
      })}
    </KeypadBottomContainer>
  );
}

export default KeypadBottom;
