import React from "react";
import styled from "styled-components";
import propTypes from "./PriceBadge.types";
import { format } from '../../../util/CurrencyHelper';

const Badge = styled.h3<any>`
    background-color: whitesmoke;
    color: black;
    padding: 0.5rem;
    border-radius: 6px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
`;

const PriceBadge = (props: propTypes) => {
    const { price, currency, locale, dataTestId } = props;
    return (
        <Badge data-testid={dataTestId}>
            {format(price, currency, locale)}
        </Badge>
    );
}

export default PriceBadge;