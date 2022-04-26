import React from 'react';
import styled, { css } from 'styled-components';

const Product = ({ name, price }) => {
    return (
        <Wrapper IsPriceHi={price > 100 || false}>
            <h4>{name}</h4>
            <p>{price}</p>
        </Wrapper>
    );
};
const Wrapper = styled.article`
    width: 300px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
        text-transform: capitalize;
    }
    p {
        ${({ IsPriceHi }) =>
            IsPriceHi
                ? css`
                      color: red;
                  `
                : css`
                      color: green;
                  `};
    }
`;

export default Product;
