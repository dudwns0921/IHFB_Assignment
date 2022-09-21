import styled from 'styled-components';
import {DARK_COLORS, KEYS} from '../constants/constants';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {display} from '../features/calculate/formulaSlice';
import {equal} from '../features/calculate/resultSlice';

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

function KeypadBtn({item}) {
  const dispatch = useDispatch();
  const returnOnClickFunc = item => {
    return function onClickFunc() {
      if (item.type && item.type !== 'operator') {
        switch (item.type) {
          case 'clear':
            window.cal.clear();
            break;
          case 'reverse':
            window.cal.reverse();
            break;
          case 'equal':
            dispatch(equal(window.cal.calculate()));
            break;
        }
      } else {
        window.cal.insert(item.txt);
      }
      dispatch(display(window.cal.getFormula()));
    };
  };
  return (
    <Btn btnType={item.type} onClick={returnOnClickFunc(item)}>
      {item.txt}
    </Btn>
  );
}

KeypadBtn.propTypes = {
  item: PropTypes.shape({
    txt: PropTypes.string,
    type: PropTypes.string,
    exec: PropTypes.func,
  }),
};

function KeypadBottom() {
  return (
    <KeypadBottomContainer>
      {KEYS.map(item => {
        return <KeypadBtn key={item.txt} item={item} />;
      })}
    </KeypadBottomContainer>
  );
}

export default KeypadBottom;
