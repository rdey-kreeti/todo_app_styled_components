import React from 'react';
import styled from 'styled-components';

const Header = ({title, className}) => {
  return (
    <header className={className}>
      <h1>{title}</h1>
      <span>using styled components</span>
    </header>
  )
}

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  flex: 0 0 auto;

  h1 {
    margin: 0;
  }

  span {
    font-size: 13px;
  }
`;

export default StyledHeader;