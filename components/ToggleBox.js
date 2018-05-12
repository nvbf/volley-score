import styled from 'styled-components';
import { LabelBox } from './Box';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Label = styled.span`
  text-indent: 16px;
  flex-grow: 1;
`;

function ToggleBox(props) {
  return (
    <LabelBox>
      <Label>{props.label}</Label>
      <Toggle defaultChecked={false} icons={false} onChange={() => null} />
    </LabelBox>
  );
}

export default ToggleBox;
