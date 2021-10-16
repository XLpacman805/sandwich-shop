import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductSummary from './ProductSummary';
import propTypes from './ProductSummary.types';

// Renders the ProductSummary component
describe('ProductSummary', () => {
  it('renders correctly', () => {
    const props:propTypes = {
      dataTestId: 'product-summary',
      list: ['hamsandy'],
    };

    render(<ProductSummary {...props} />);
    const productSummary = screen.getByTestId('product-summary');
    expect(productSummary).toBeInTheDocument();
  }) 
});

// ProductSummary renders all the strings from props.list to the screen
describe('ProductSummary', () => {
  it('renders all the strings from props.list to the screen', () => {
    const props:propTypes = {
      dataTestId: 'product-summary',
      list: ['lettuce', 'tomato', 'bacon'],
    };

    render(<ProductSummary {...props} />);
    const productSummary = screen.getByTestId('product-summary');
    expect(productSummary).toBeInTheDocument();
    expect(productSummary).toHaveTextContent(props.list[0]);
    expect(productSummary).toHaveTextContent(props.list[1]);
    expect(productSummary).toHaveTextContent(props.list[2]);
  });

  //it renders the correct number of strings from props.list to the screen
  it('renders the correct number of strings from props.list to the screen', () => {
    const props:propTypes = {
      dataTestId: 'product-summary',
      list: ['lettuce', 'tomato', 'bacon', 'mayo'],
    };

    render(<ProductSummary {...props} />);
    const productSummary = screen.getByTestId('product-summary');
    const listItems = productSummary.querySelectorAll('li');
    expect(listItems.length).toBe(props.list.length);
  });
});
