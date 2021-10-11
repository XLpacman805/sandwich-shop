import React, { useState } from 'react';
import propTypes from './QuantitySelector.types';

const QuantitySelector = (props: propTypes) => {
    const [quantity, setQuantity] = useState(props.initialValue || 1);
    const isIncrementDisabled = () => quantity === props.maximum;
    const isDecrementDisabled = () => quantity === props.minumum;

    return (
        <div data-testid="quantity-selector-test-id">
            <span className="label">{props.label}</span>
            <div>
                <button className="decrement-button" disabled={isDecrementDisabled()} onClick={() => setQuantity(quantity - 1)}>-</button>
                <span className="quantity-display">{quantity}</span>
                <button className="increment-button" disabled={isIncrementDisabled()} onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div>
    );
}

export default QuantitySelector;