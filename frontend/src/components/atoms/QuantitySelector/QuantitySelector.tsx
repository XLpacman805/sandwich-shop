import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from './QuantitySelector.types';

const Container = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
`;

const Label = styled.span`
font-weight: bold;
margin-right: 1rem;
display: none;
@media (min-width: 768px) {
    display: block;
}
`;

const QuantityContainer = styled.div`
border: 1px solid gray;
border-radius: 20px;
display: flex;
padding: 1px 0px;
`;

const Button = styled.button`
border: none;
background-color: transparent;
font-size: large;
`;

const QuantityDisplay = styled.span`
padding: 0px 15px;
`;

const QuantitySelector = (props: propTypes) => {
    const [quantity, setQuantity] = useState(props.initialValue || 1);
    const isIncrementDisabled = () => quantity === props.maximum;
    const isDecrementDisabled = () => quantity === props.minumum;

    return (
        <Container data-testid="quantity-selector-test-id">
            <Label className="label">{props.label} </Label>
            <QuantityContainer>
                <Button className="decrement-button" disabled={isDecrementDisabled()} onClick={() => setQuantity(quantity - 1)}>-</Button>
                <QuantityDisplay className="quantity-display">{quantity}</QuantityDisplay>
                <Button className="increment-button" disabled={isIncrementDisabled()} onClick={() => setQuantity(quantity + 1)}>+</Button>
            </QuantityContainer>
        </Container>
    );
}

export default QuantitySelector;