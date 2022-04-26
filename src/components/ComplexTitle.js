import React from 'react';
import styled from 'styled-components';
import { colors } from './../utils';

const ComplexTitle = ({ title }) => {
    return (
        <Wrapper className='bg-grey'>
            <h1>{title}</h1>
            <div className='underline'></div>
            {/* <div className='box'></div> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h1 {
        text-transform: capitalize;
        text-align: center;
    }
    .underline {
        width: 5rem;
        height: 0.25rem;
        background-color: var(--primary);
        margin: 0 auto;
    }
    .box {
        height: 10px;
        border: var(--mainBorder);
    }
`;

export default ComplexTitle;
