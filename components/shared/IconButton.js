import styled from 'styled-components';
import React from 'react';
import { Button } from 'evergreen-ui';

const ResponsiveButton = styled(Button)`
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 16px;
    justify-content: center;
  }
`;

function IconButton({ onClick, text, icon }) {
  return (
    <ResponsiveButton
      height={48}
      iconBefore={icon}
      appearance="primary"
      intent="none"
      marginLeft={16}
      marginRight={16}
      onClick={onClick}
    >
      {text}
    </ResponsiveButton>
  );
}

export default IconButton;
