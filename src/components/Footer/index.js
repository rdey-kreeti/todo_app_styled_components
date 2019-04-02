import React from 'react';
import styled from 'styled-components';

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <span>&copy; 2019 Todo app</span>
    </footer>
  )
}

const StyledFooter = styled(Footer)`
  display: flex;
  padding: 15px 0;
  border-top: 1px solid #efefef;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  font-size: 13px;
  color: #999;
  flex: 0 0 auto;
`;

export default StyledFooter;