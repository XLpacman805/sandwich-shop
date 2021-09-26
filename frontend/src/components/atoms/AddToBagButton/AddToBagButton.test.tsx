import React from 'react';
import {render, screen} from '@testing-library/react';
import AddToBagButton from './AddToBagButton';
import { props as AddToBagProps } from './AddToBagButton.types';

// renders an AddToBagButton component
describe('AddToBagButton', () => {
    const props: AddToBagProps = {
        props: {
            dataTestId: 'add-to-bag-button-test-id',
            price: 9.97,
            text: 'Add to Bag',
            onClick: jest.fn(() => console.log('add-to-bag-clicked')),
        }
    };
    
    it('renders the AddToBagButton component', () => {
        render(<AddToBagButton {...props} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toBeInTheDocument();
    });
});

//renders the price prop in the AddToBagButton component as a string
describe('AddToBagButton', () => {
    let props: any = {
        props: {
            dataTestId: 'add-to-bag-button-test-id',
            text: 'Add to Bag',
            onClick: jest.fn(() => console.log('add-to-bag-clicked')),
            price: 9.97999
        }
    };
    
    it('renders the price prop in the AddToBagButton component as "$9.98"', () => {
        render(<AddToBagButton {...props} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toHaveTextContent('$9.98');
    });

    it('renders the price prop in the AddToBagButton component as "$0.01"', () => {
        const newProps = {...props};
        newProps.props.price = 0.0100001;; 
        render(<AddToBagButton {...newProps} price={0.0100001} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toHaveTextContent('$0.01');
    });

    it('renders the price prop in the AddToBagButton component as "$8"', () => {
        const newProps = {...props};
        newProps.props.price = 8.000001;;
        render(<AddToBagButton {...newProps} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toHaveTextContent('$8');
    });

    it('renders the price prop in the AddToBagButton component as Not a Number', () => {
        const newProps = {...props};
        newProps.props.price = "$33.09";
        render(<AddToBagButton {...props} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toHaveTextContent('$NaN');
    });
});

//renders the text prop in the AddToBagButton component as a string
describe('AddToBagButton', () => {
    const props: AddToBagProps = {
        props: {
            dataTestId: 'add-to-bag-button-test-id',
            price: 100,
            text: 'Add to Super Bag',
            onClick: jest.fn(() => console.log('add-to-bag-clicked')),
        }
    }

    it('renders the text prop in the AddToBagButton component as "Add to Super Bag"', () => {
        render(<AddToBagButton {...props} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toHaveTextContent('Add to Super Bag');
    });

    //renders the text prop in the AddToBagButton component as "Add to Bag" when no text prop is passed
    it('renders the text prop in the AddToBagButton component as "Add to Bag" when no text prop is passed', () => {
        const newProps = {...props};
        newProps.props.text = undefined;
        render(<AddToBagButton {...newProps} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toHaveTextContent('Add to Bag');
    });
});

// executes the onClick prop function when the AddToBagButton component is clicked
describe('AddToBagButton', () => {
    const props: AddToBagProps = {
        props: {
            dataTestId: 'add-to-bag-button-test-id',
            price: 12.99,
            text: 'Add to Super Bag',
            onClick: jest.fn(() => console.log('add-to-bag-clicked')),
        }
    };

    it('executes the onClick prop function when the AddToBagButton component is clicked', () => {
        render(<AddToBagButton {...props} />);
        const addToBagButton = screen.getByTestId('add-to-bag-button-test-id');
        addToBagButton.click();
        expect(props.props.onClick).toHaveBeenCalledTimes(1);
    });
});

// Disables the AddToBagButton component when the disabled prop is passed
describe('AddToBagButton', () => {
    const props: AddToBagProps = {
        props: {
            dataTestId: 'add-to-bag-button-test-id',
            price: 12.99,
            text: 'Add to Super Bag',
            onClick: jest.fn(() => console.log('add-to-bag-clicked')),
            disabled: true
        }
    };

    it('disables the AddToBagButton component when the disabled prop is passed', () => {
        render(<AddToBagButton {...props} />);
        expect(screen.getByTestId('add-to-bag-button-test-id')).toBeDisabled();
    });
});