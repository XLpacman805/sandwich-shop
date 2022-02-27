import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductCard from './ProductCard';
import propTypes from './ProductCard.types';

describe('ProductCard', () => {
    it('Should render a component', () => {
        const props: propTypes = {
            productName: 'BLT',
            productDescription: 'A classic sandwich made of bacon, lettuce, and tomato.',
            dataTestId: 'product-card-test-id'
        };

        render(<ProductCard {...props} />);
        const productCard = screen.getByTestId('product-card-test-id');
        expect(productCard).toBeInTheDocument();
    });

    it ('Should render the product name', () => {
        const props: propTypes = {
            productName: 'BLT',
            productDescription: 'A classic sandwich made of bacon, lettuce, and tomato.',
            dataTestId: 'product-card-test-id'
        };

        render(<ProductCard {...props} />);
        const productCard = screen.getByTestId('product-card-test-id');
        expect(productCard).toHaveTextContent('BLT');
    });

    it ('Should render the product description', () => {
        const props: propTypes = {
            productName: 'BLT',
            productDescription: 'A classic sandwich made of bacon, lettuce, and tomato.',
            dataTestId: 'product-card-test-id'    
        }

        render(<ProductCard {...props} />);
        const productCard = screen.getByTestId('product-card-test-id');
        expect(productCard).toHaveTextContent('A classic sandwich made of bacon, lettuce, and tomato.');
    });
});