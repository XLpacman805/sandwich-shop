import React from "react";

export interface propTypes {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    price: number,
    text?: string,
    dataTestId?: string
}

export interface styleProps {
    backgroundColor?: string,
    disabledBackgroundColor?: string,
    hoverBackgroundColor?: string,
    activeBackgroundColor?: string,
    color?: string,
    disabledColor?: string,
    hoverColor?: string,
    activeColor?: string,
    fontFamily?: string,
}

export interface props {
    props: propTypes;
    styleProps?: styleProps;
}

export const styleDefaults: styleProps  = {
    backgroundColor: '#0070eb',
    disabledBackgroundColor: 'grey',
    hoverBackgroundColor: '#0058b8',
    activeBackgroundColor: '#003f85',
    color: 'white',
    disabledColor: 'white',
    hoverColor: 'white',
    activeColor: 'white',
    fontFamily: 'inherit',
}