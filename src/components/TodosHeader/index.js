import React from 'react';
import styled from 'styled-components';

const TodosHeader = ({count, todosFilter, activeFilterStatus, className}) => {
  const filterValue = ['all', 'active', 'completed'];
  return (
    <section className={className}>
      <span>{count} {count > 1 ? 'items' : 'item'} left</span>
      <ul>
        {filterValue.map(el => <FilterItem className={activeFilterStatus === el ? 'active' : null} onClick={() => todosFilter(el)}>{el}</FilterItem>)}
      </ul>
    </section>
  )
}

const FilterItem = styled.li`
  margin-left: 5px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid transparent;
  text-transform: capitalize;

  &:first-child {
    margin-left: 0;
  }

  &.active {
    border: 1px solid #efefef;
    border-radius: 4px;
  }
`;

const StyledHeader = styled(TodosHeader)`
  display: flex;
  flex-direction: row;
  color: #999;
  justify-content: space-between;
  width: 600px;
  padding: 10px;

  > span:first-child {
    margin-top: 6px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
`;

export default StyledHeader;