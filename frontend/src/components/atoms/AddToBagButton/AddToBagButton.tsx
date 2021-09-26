import React from 'react';
import styled from 'styled-components';
import { props, styleProps, styleDefaults } from './AddToBagButton.types';
import { format } from '../../../util/CurrencyHelper';

const Button = styled.button<any>(( props: styleProps) => {
    return {
        width: '100%',
        height: 'auto',
        padding: '8%',
        backgroundColor: props.backgroundColor,
        borderRadius: '5px',
        border: 'none',
        boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.75)',
        color: props.color,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'inherit',
        '&:disabled': {
            backgroundColor: props.disabledBackgroundColor,
            color: props.disabledColor,
        },
        '&:hover:enabled, &:focus:enabled': {
            backgroundColor: props.hoverBackgroundColor,
            color: props.hoverColor,
        },
        '&:active:enabled': {
            backgroundColor: props.activeBackgroundColor,
            color: props.activeColor,
        },
        '.text': {
            fontWeight: 'bold',
        },
    }
});

const AddToBagButton = (props: props) => {
    const { dataTestId, text = "Add to Bag", price, onClick, disabled = false } = props.props;
    const styles = props.styleProps || styleDefaults;
    return (
        <Button {...styles} data-testid={dataTestId} onClick={onClick} disabled={disabled}>
            <span className="text">{text}</span>
            <span className="price">{format(price)}</span>
        </Button>
    );
}

export default AddToBagButton;