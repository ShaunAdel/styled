import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledCard>
            <img
                src='https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52?ts=1649472837&userId=usrQMwWEPx18KgLcP&cs=dbe84bb45d7e113a'
                alt='product'
            />
            <footer>
                <h4>product name</h4>
                <p>$15 </p>
            </footer>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    width: 90vw;
    max-width: 300px;
    background-color: var(--white);
    border-radius: 0.25rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        box-shadow: 0 3px 3px #222;
        cursor: pointer;
    }
    img {
        width: 100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        &:hover {
            background-color: red;
        }

        h4 {
            text-transform: capitalize;
            &::before {
                content: 'Name : ';
                color: red;
            }
        }
        p {
            color: var(--primary);
            font-weight: 700;
        }
    }
    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

export default Card;
