import React from 'react';
import { screen, render } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';
import propTypes from './QuantitySelector.types';

// renders QuantitySelector component
describe('QuantitySelector', () => {
    it('renders QuantitySelector component', () => {
        const props: propTypes = {
            label: 'Quantity',
            value: 1,
            updateValue: jest.fn(),
        }

        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        expect(quantitySelector).toBeInTheDocument();
    });
});

// renders QuantitySelector component with props
describe('QuantitySelector with props', () => {
    it('renders QuantitySelector component with props', () => {
        const props: propTypes = {
            label: 'Quantity',
            value: 1,
            updateValue: jest.fn(),
        }

        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        expect(quantitySelector).toHaveTextContent(props.label);
        const quantity : any = quantitySelector.querySelector('.quantity-display');
        expect(quantity).toHaveTextContent(props.value.toString());
        const decrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.decrement-button');
        const incrementButton: HTMLButtonElement | null = quantitySelector.querySelector('.increment-button');

        decrementButton?.click();
        incrementButton?.click();

        expect(props.updateValue).toHaveBeenCalledTimes(2);
    });
});
