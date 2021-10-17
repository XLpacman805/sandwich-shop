import React from 'react';
import propTypes from './ProductCard.types';

const ProductCard = (props: propTypes): JSX.Element => {
    return(
        <div data-testid={props.dataTestId}>Hello Wolrd</div>
    );
}

export default ProductCard;