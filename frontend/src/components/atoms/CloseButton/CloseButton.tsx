import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #ffffff;
    color: #0070eb;
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
        color: #003f85;
    }

    &:active {
        background-color: #d4d4db;
    }

`;

//create a functional component
const CloseButton = (props : any) => {
    // return a button
    return (
        <Button data-testid={props.dataTestId} className="close-button" onClick={props.onClick}>
            <span>&times;</span>
        </Button>
    );
};

// export the component
export default CloseButton;