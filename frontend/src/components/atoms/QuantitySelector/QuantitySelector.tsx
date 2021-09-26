import React from 'react';
import propTypes from './QuantitySelector.types';

const QuantitySelector = (props: propTypes) => {
    return (
        <div data-testid="quantity-selector-test-id">
            <span className="label">{props.label}</span>
            <div>
                <button className="decrement-button" onClick={props.updateValue(-1)}>-</button>
                    <span className="quantity-display">{props.value}</span>
                <button className="increment-button" onClick={props.updateValue(1)}>+</button>
            </div>
        </div>
    );
}

export default QuantitySelector;