import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <GlobalStyle />
        <Header title="TODO APP"/>
        <Todos />
        <Footer />
      </PageWrapper>
    );
  }
}

export default App;