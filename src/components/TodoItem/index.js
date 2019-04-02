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
  box-sizing: border-box;
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
`;

const Cross = styled.span`
  color: #999;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 20px;
`;

export default StyledTodoItem;