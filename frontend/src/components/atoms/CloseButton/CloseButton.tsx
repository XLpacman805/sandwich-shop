import React from "react";
import styled from "styled-components";
import propTypes from './CloseButton.types';

const Button = styled.button<propTypes>`
    background-color: ${props => (props ? props.defaultBackgroundColor : "#fffffff")};
    color: ${props => (props ? props.defaultColor : "#0070eb")};
    border-style: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;


    &> span {
        font-size: x-large;
        margin: auto;
    }

    &:hover,
    &:focus,
    &:active {
        color: ${props => (props.altColor ? props.altColor : "#003f85")};

    &:active {
        background-color: ${props => (props.altBackgroundColor ? props.altBackgroundColor : "#d4d4db")};
    }
`;

//create a functional component
const CloseButton = (props : propTypes) => {
    // return a button
    return (
        <Button data-testid={props.dataTestId} 
            className="close-button" 
            defaultBackgroundColor={props.defaultBackgroundColor}
            defaultColor={props.defaultColor}
            altColor={props.altColor}
            altBackgroundColor={props.altBackgroundColor}
            onClick={props.onClick}>

            <span>&times;</span>
        </Button>
    );
};

// export the component
export default CloseButton;