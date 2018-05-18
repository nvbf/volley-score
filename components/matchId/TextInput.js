import styled from 'styled-components';

const TextInput = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 48px;
  font-size: 24px;
  text-indent: 16px;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
  margin: 0;
  margin-bottom: 16px;

  &:disabled {
    background-color: #e9e9e9;
  }
`;

export default TextInput;
