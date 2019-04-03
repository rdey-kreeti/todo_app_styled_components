import React from 'react';
import styled from 'styled-components';



const TodoItem = ({data, className, handleDone, handleDelete}) => {
  return (
    <li className={className}>
      <span onClick={() => handleDone(data.id)}>{data.value}</span>
      <Cross onClick={() => handleDelete(data.id)}>X</Cross>
    </li>
  )
}

const StyledTodoItem = styled(TodoItem)`
  border: 1px solid #efefef;
  padding: 10px;
  height: 48px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    display: block;
    width: calc(100% - 20px);
    cursor: pointer;
    ${({data}) => data.status === 'completed' && `
      text-decoration: line-through;
      opacity: 0.3;
    `}
  }

  &:hover span:last-child {
    opacity: 1;
  }
`;

const Cross = styled.span`
  color: rgba(204, 0, 0, 0.5);
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 20px;
  opacity: 0;
  transition: all 0.3s linear;
`;

export default StyledTodoItem;