import React, {Component} from 'react';
import styled from 'styled-components';
import Input from '../Input';
import TodoItem from '../TodoItem';
import TodosFooter from '../TodosFooter';

const Wrapper = styled.section`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
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
      copiedTodos: []
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

  filterTodosByType = (type) => {
    const {todos, copiedTodos} = this.state;
    let filteredTodos = [];
    if(copiedTodos.length === 0) {
      filteredTodos = todos.filter(el => el.status === type);
    } else {
      filteredTodos = copiedTodos.filter(el => el.status === type);
    }
    this.setState({copiedTodos: todos, todos: filteredTodos});
  }

  render() {
    console.log(this.state.todos, this.state.copiedTodos);
    const {todos} = this.state;
    const todosCount = todos.filter(el => el.status === 'active').length;
    return (
      <Wrapper>
        <Input type="text" handleUserInput={this.handleCreateTodo}/>
        <TodosWrapper>
          {this.state.todos.map((el,i) => (
            <TodoItem key={i} data={el} handleDone={this.markTodoDone} handleDelete={this.handleDeleteTodo}/>
          ))}
        </TodosWrapper>
        <TodosFooter todosFilter={this.filterTodosByType} count={todosCount}/>
      </Wrapper>
    )
  }
}

export default Todos;