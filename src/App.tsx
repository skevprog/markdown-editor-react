import React from 'react';
import styled from 'styled-components';
import MarkedInput from './components/MarkedInput';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  color: #fff;
  box-sizing: border-box;
  padding: 3em;
`;

const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 1em;
`;

function App() {
  return (
    <AppContainer>
      <Title>Markdown Editor</Title>
      <MarkedInput />
    </AppContainer>
  );
}

export default App;
