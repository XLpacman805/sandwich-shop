import React from 'react';
import propTypes from './ProductCard.types';
import styled from 'styled-components';

const P = styled.p`
    color: gray;
`;

const ProductCard = (props: propTypes): JSX.Element => {
    return(
        <div data-testid={props.dataTestId}>
            <h2>{props.productName}</h2>
            <P>{props.productDescription}</P>
        </div>
    );
}

export default ProductCard;