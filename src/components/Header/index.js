import React from 'react';
import styled from 'styled-components';

const Header = ({title, className}) => {
  return (
    <header className={className}>
      <h1>{title}</h1>
    </header>
  )
}

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  flex: 0 0 auto;

  h1 {
    margin: 0;
  }
`;

export default StyledHeader;