import React, {Component} from 'react';
import styled from 'styled-components';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  handleUserInput = (e) => {
    this.setState({inputValue: e.target.value});

    if(e.keyCode === 13) {
      this.props.handleUserInput(this.state.inputValue);
      this.setState({inputValue: ''});
    }
  }

  render() {
    const {className, type} = this.props;
    const {inputValue} = this.state;

    return (
      <input
        placeholder="What needs to be done"
        className={className}
        type={type}
        value={inputValue}
        onChange={this.handleUserInput}
        onKeyUp={this.handleUserInput}
      />
    )
  }
}

const StyledInput = styled(Input)`
  border: 1px solid #efefef;
  padding: 5px;
  height: 48px;
  box-sizing: border-box;
  width: 600px;
`;

export default StyledInput;