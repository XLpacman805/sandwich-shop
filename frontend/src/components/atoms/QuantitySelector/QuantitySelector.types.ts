import React from "react";

export default interface propTypes {
    label: string;
    value: number;
    updateValue: Function;
    styleProps?: styleProps;
}

export interface styleProps {
    backgroundColor: string;
}