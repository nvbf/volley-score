import styled from 'styled-components';
import Box from './Box';

const Label = styled.span`
  text-indent: 16px;
  flex-grow: 1;
`;

const SelectText = styled.span`
  color: #a70f7f;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  padding: 8px;
  min-width: 48px;
  background-color: #222b38;
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
    <Box paddingLeft={0} noMargin onClick={props.onClick}>
      {props.logo && <Image src={props.logo} alt={props.text} />}
      {props.color && <Color code={props.color} />}
      <Label>{props.text}</Label>
      <SelectText>{props.selectText}</SelectText>
    </Box>
  );
}

export default SelectBox;
