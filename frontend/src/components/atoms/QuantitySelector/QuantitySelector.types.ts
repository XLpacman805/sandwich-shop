import React from "react";

export default interface propTypes {
    label: string,
    initialValue: number,
    maximum?: number,
    minumum?: number,
    styleProps?: styleProps,

}

export interface styleProps {
    backgroundColor: string,
}