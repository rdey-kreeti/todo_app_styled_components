import React, {Component} from 'react';
import styled from 'styled-components';
import Input from '../Input';
import TodoItem from '../TodoItem';
import TodosHeader from '../TodosHeader';

const Wrapper = styled.section`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  overflow-y: auto;

  input {
    flex: 0 0 auto;
  }
`;

const TodosWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      activeFilter: 'all'
    }
  }

  handleCreateTodo = (val) => {
    const {todos} = this.state;
    if(todos.length) {
      const lastItemId = todos[todos.length - 1].id;
      this.setState({todos: [...todos, {id: lastItemId + 1, value: val, status: 'active'}]});
    } else {
      this.setState({todos: [...todos, {id: 1, value: val, status: 'active'}]});
    }
  }

  handleDeleteTodo = (id) => {
    let {todos} = this.state;
    todos = todos.filter(el => el.id !== id);
    this.setState({todos});
  }

  markTodoDone = (id) => {
    let {todos} = this.state;
    const selectedTodo = todos.find(el => el.id === id);

    if(selectedTodo.status === 'active') {
      selectedTodo.status = 'completed';
    } else if (selectedTodo.status === 'completed') {
      selectedTodo.status = 'active';
    }

    this.setState({todos});
  }

  filterTodosByType = () => {
    const {todos, activeFilter} = this.state;
    let filteredTodos = [];

    if(activeFilter === 'all') {
      filteredTodos = todos;
    } else {
      filteredTodos = todos.filter(el => el.status === activeFilter);
    }

    return filteredTodos;
  }

  setActiveFilter = (type) => {
    this.setState({activeFilter: type});
  }

  render() {
    const filteredTodos = this.filterTodosByType();
    const todosCount = filteredTodos.filter(el => el.status === 'active').length;

    return (
      <Wrapper>
        <TodosHeader activeFilterStatus={this.state.activeFilter} todosFilter={this.setActiveFilter} count={todosCount}/>
        <Input type="text" handleUserInput={this.handleCreateTodo}/>
        <TodosWrapper>
          {filteredTodos.map((el,i) => (
            <TodoItem key={i} data={el} handleDone={this.markTodoDone} handleDelete={this.handleDeleteTodo}/>
          ))}
        </TodosWrapper>
      </Wrapper>
    )
  }
}

export default Todos;