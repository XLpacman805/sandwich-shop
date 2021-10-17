import React from 'react';
import propTypes from './ProductSummary.types';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const UL = styled.ul`
    list-style: bullet;
`;

const ProductSummary = (props: propTypes): JSX.Element => {
    return (
        <Container data-testid={props.dataTestId}>
            <UL>
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </UL>
        </Container>
    );
};

export default ProductSummary;