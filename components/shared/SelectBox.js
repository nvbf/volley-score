import styled from 'styled-components';
import Box from './Box';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Label = styled.span`
  text-indent: 16px;
  flex-grow: 1;
`;

const SelectText = styled.span`
  color: #a70f7f;
`;

const Image = styled.img`
  height: 36px;
  width: 36px;
  min-width: 36px;
`;
const Color = styled.div`
  height: 36px;
  width: 36px;
  min-width: 36px;
  background-color: ${props => props.code};
  border-radius: 4px;
`;

function SelectBox(props) {
  return (
    <Box noMargin onClick={props.onClick}>
      {props.logo && <Image src={props.logo} alt={props.text} />}
      {props.color && <Color code={props.color} />}
      <Label>{props.text}</Label>
      <SelectText>{props.selectText}</SelectText>
    </Box>
  );
}

export default SelectBox;
