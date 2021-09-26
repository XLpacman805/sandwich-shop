import React from 'react';
import styled from 'styled-components';
import { props, styleProps, styleDefaults } from './AddToBagButton.types';
import { format } from '../../../util/CurrencyHelper';

const Button = styled.button<any>(( props: styleProps) => {
    return {
        width: '100%',
        height: 'auto',
        padding: '8% 5%',
        backgroundColor: props.backgroundColor,
        color: props.color,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'inherit',
        '&:disabled': {
            backgroundColor: props.disabledBackgroundColor,
            color: props.disabledColor,
        },
        '&:hover, &:focus': {
            backgroundColor: props.hoverBackgroundColor,
            color: props.hoverColor,
        },
        '&:active': {
            backgroundColor: props.activeBackgroundColor,
            color: props.activeColor,
        },
        '.text': {
            fontWeight: 'bold',
        },
    }
});

const AddToBagButton = (props: props) => {
    const { dataTestId, text = "Add to Bag", price, onClick } = props.props;
    const styles = props.styleProps || styleDefaults;
    return (
        <Button {...styles} data-testid={dataTestId} onClick={onClick}>
            <span className="text">{text}</span>
            <span className="price">{format(price)}</span>
        </Button>
    );
}

export default AddToBagButton;