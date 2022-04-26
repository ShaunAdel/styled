import React from 'react';
import styled, { css } from 'styled-components/macro';

const Button = styled.button`
    background: var(--primary);
    border: none;
    color: white;
    padding: 0.25rem;
    cursor: pointer;
`;

function Form() {
    return (
        <div>
            <h2>some random stuff</h2>
            <Button>click me</Button>
            <form
                css={`
                    width: 300px;
                    background: #fff;
                    padding: 2rem;
                    margin-top: 1rem;
                `}
            >
                <h2>Form</h2>
                <input type='text' />
                <button>submit here</button>
            </form>
        </div>
    );
}

export default Form;
