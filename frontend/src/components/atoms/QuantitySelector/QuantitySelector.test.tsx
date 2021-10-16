import React from 'react';
import { screen, render } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';
import propTypes from './QuantitySelector.types';

// renders QuantitySelector component
describe('QuantitySelector', () => {
    it('renders QuantitySelector component', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 1,
            minumum: 1,
            maximum: 1
        }

        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        expect(quantitySelector).toBeInTheDocument();
        jest.clearAllMocks();
    });
});

// renders QuantitySelector component with props
describe('QuantitySelector with props', () => {
    it('renders QuantitySelector component with props', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 1,
        }
        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        expect(quantitySelector).toHaveTextContent(props.label);
        const quantityDisplay : HTMLSpanElement | null = quantitySelector.querySelector('span.quantity-display');
        expect(quantityDisplay).toHaveTextContent(props.initialValue.toString());
        jest.clearAllMocks();
    });
});

// QuantitySelector buttons increment and decrement the displayValue onClick
describe('QuantitySelector buttons increment and decrement the displayValue onClick', () => {
    it('QuantitySelector increment-button onClick increments value', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 1,
            minumum: 1,
            maximum: 10
        }
        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        const incrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.increment-button');
        incrementButton?.click();
        incrementButton?.click();
        incrementButton?.click();
        const qunatityDisplay : HTMLSpanElement | null = quantitySelector.querySelector('span.quantity-display');
        expect(qunatityDisplay).toHaveTextContent('4');
        jest.clearAllMocks();
    });

    it('QuantitySelector cdecrement-button onClick decrements value', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 10,
            minumum: 1,
            maximum: 10,
        }
        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        const decrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.decrement-button');
        decrementButton?.click();
        decrementButton?.click();
        const qunatityDisplay : HTMLSpanElement | null = quantitySelector.querySelector('span.quantity-display');
        expect(qunatityDisplay).toHaveTextContent('8');
        jest.clearAllMocks();
    });
});

// Increment and Decrement buttons should be disabled to not exceed the maximum nor go below the minumum.
describe('Increment and Decrement buttons should be disabled to not exceed the maximum nor go below the minumum.', () => {
    it('increment-button is disabled when quantity is equal to maximum', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 1,
            maximum: 3,
            minumum: 1,
        };

        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        const incrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.increment-button');
        incrementButton?.click(); //quantity: 2
        incrementButton?.click(); //quantity:3 (MAX)
        incrementButton?.click(); // Should fail or something.
        const qunatityDisplay : HTMLSpanElement | null = quantitySelector.querySelector('span.quantity-display');
        expect(qunatityDisplay).toHaveTextContent('3');
        jest.clearAllMocks();

    });

    it('decrement-button is disabled when quantity is equal to minimum', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 1,
            maximum: 2,
            minumum: 1,
        };

        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        const decrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.decrement-button');
        decrementButton?.click(); //quantity: 1 (MAX)
        decrementButton?.click();
        decrementButton?.click(); 
        const qunatityDisplay : HTMLSpanElement | null = quantitySelector.querySelector('span.quantity-display');
        expect(qunatityDisplay).toHaveTextContent('1');
        jest.clearAllMocks();
    });

    it('both increment and decrement are disabled if min and max are the same.', () => {
        const props: propTypes = {
            label: 'Quantity',
            initialValue: 1,
            maximum: 1,
            minumum: 1,
        };

        render(<QuantitySelector {...props} />);
        const quantitySelector = screen.getByTestId('quantity-selector-test-id');
        const decrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.decrement-button');
        decrementButton?.click(); //quantity: 1 (MAX)
        decrementButton?.click();
        decrementButton?.click();
        decrementButton?.click();

        const incrementButton: HTMLButtonElement | null = quantitySelector.querySelector('button.increment-button');
        incrementButton?.click();

        const qunatityDisplay : HTMLSpanElement | null = quantitySelector.querySelector('span.quantity-display');
        expect(qunatityDisplay).toHaveTextContent('1');
        jest.clearAllMocks();
    });
});
