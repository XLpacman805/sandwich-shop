import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductSticker from './ProductSticker';
import propTypes from './ProductSticker.types';

describe('ProductSticker', () => {
    it('should render', () => {
        const props: propTypes = {
            dataTestId: 'product-sticker-test-id',
            productName: 'product-name',
            productPrice: 9.99,
        };
        render(<ProductSticker {...props} />);
        const productSticker = screen.getByTestId('product-sticker-test-id');
        expect(productSticker).toBeInTheDocument();
    });

    it('Should render with the product name text', () => {
        const props: propTypes = {
            dataTestId: 'product-sticker-test-id',
            productName: 'Product name',
            productPrice: 9.99,
        };
        render(<ProductSticker {...props} />);
        const productSticker = screen.getByTestId('product-sticker-test-id');
        expect(productSticker).toHaveTextContent('Product name');
    });

    it('Should render with the product price text', () => {
        const props: propTypes = {
            dataTestId: 'product-sticker-test-id',
            productName: 'Product name',
            productPrice: 9.99,
        };
        render(<ProductSticker {...props} />);
        const productSticker = screen.getByTestId('product-sticker-test-id');
        expect(productSticker).toHaveTextContent('$9.99');
    });
});