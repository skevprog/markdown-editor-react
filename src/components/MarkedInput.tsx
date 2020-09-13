import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const InputContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  padding: 1em;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  height: 100%;
  width: 100%;
  font-size: 17px;
  padding: 1em;
  box-sizing: border-box;
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

const Title = styled.h2`
  margin: 0 0 1em 0;
  text-align: center;
`;

function MarkedInput() {
  const [text, setText] = useState<string>('');
  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => setText(ev.target.value);

  return (
    <Container>
      <InputContainer>
        <Title>Markdown Text</Title>
        <TextArea
          value={text}
          placeholder="Write your markdown here"
          onChange={handleChange}
        />
      </InputContainer>
      <ResultContainer>
        <Title>Converted Text</Title>
        <ReactMarkdown source={text} />
      </ResultContainer>
    </Container>
  );
}

export default MarkedInput;
