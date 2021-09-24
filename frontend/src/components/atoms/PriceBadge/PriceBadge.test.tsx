import React from 'react';
import { render, screen } from '@testing-library/react';
import PriceBadge from './PriceBadge';
import PriceBadgeProps from './PriceBadge.types';

// renders a PriceBadge component
test('renders a PriceBadge component', () => {
    const props: PriceBadgeProps = {
        price: 10,
        currency: 'USD',
        dataTestId: 'price-badge',
    };
    render(<PriceBadge {...props} />);
    const priceBadge = screen.getByTestId('price-badge');
    expect(priceBadge).toBeInTheDocument();
});

// renders a PriceBadge component with a price of 0 and currency of USD
test('renders a PriceBadge component with a price of 0 and currency of USD', () => {
    const props: PriceBadgeProps = {
        price: 0,
        currency: 'USD',
        dataTestId: 'price-badge',
    };
    render(<PriceBadge {...props} />);
    const priceBadge = screen.getByTestId('price-badge');
    expect(priceBadge).toHaveTextContent('$0');
});
