import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    background-color: #0E76A8;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    height: 500px;
    width: 500px;
    text-align: center;
    box-shadow: 5px 5px 10px #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 16px;
`;

const Input = styled.input`
    border-radius: 8px;
    font-size: 16px;
    padding: 8px;
    border: 2px solid #0E76A8;
    outline-width: 0;
    text-align: center;
`;

export const Challenge1Page = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <Wrapper>
            <Box>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className="input-large"
                    id="first-name-input"
                    data-cy="first-name-input"
                />
                <p>
                    <span data-cy="name-greeting">{inputValue && <>Hello, {inputValue}!</>}</span>
                </p>
            </Box>
        </Wrapper>
    );
}