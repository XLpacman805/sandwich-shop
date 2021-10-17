import React from 'react';
import propTypes from './ProductSticker.types';
import styled from 'styled-components';
import { format } from '../../../util/CurrencyHelper';

const Container = styled.div`
    background-color: whitesmoke;
    opacity: 0.9;
    color: black;
    min-height: 55px;
    max-width: 100%;
    border-radius: 3px;
    padding: 2%;
`;

const H2 = styled.h2`
    margin: 0px;
`;

const H3 = styled.h3`
    margin: 0px;
`;

const ProductSticker = (props: propTypes) : JSX.Element => {
    return (
        <Container data-testid={props.dataTestId}>
            <H2> {props.productName} </H2>
            <H3> {format(props.productPrice)} </H3>
        </Container>
    );
}

export default ProductSticker;