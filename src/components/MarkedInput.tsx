import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const InputContainer = styled.div`
  height: 20em;
  min-width: 10em;
  width: 50%;
  display: flex;
  width: 100%;
  padding: 1mm;
`;

const ResultContainer = styled.div`
  height: 20em;
  width: 100%;
  height: 100%;
  font-size: 17px;
  padding: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 1em;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

function MarkedInput() {
  const [text, setText] = useState<string>('');
  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => setText(ev.target.value);

  return (
    <Container>
      <InputContainer>
        <TextArea value={text} onChange={handleChange} />
      </InputContainer>
      <ResultContainer>
        <ReactMarkdown source={text} />
      </ResultContainer>
    </Container>
  );
}

export default MarkedInput;
