import React from 'react';
import styled from 'styled-components';

const TodosFooter = ({count, todosFilter, className}) => {
  return (
    <section className={className}>
      <span>{count} {count > 1 ? 'items' : 'item'} left</span>
      <ul>
        <li onClick={() => todosFilter('all')}>All</li>
        <li onClick={() => todosFilter('active')}>Active</li>
        <li onClick={() => todosFilter('completed')}>Completed</li>
      </ul>
    </section>
  )
}

const StyledFooter = styled(TodosFooter)`
  display: flex;
  flex-direction: row;
  color: #999;
  justify-content: space-between;
  width: 600px;
  padding: 10px;
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export default StyledFooter;