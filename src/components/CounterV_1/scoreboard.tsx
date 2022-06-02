import React from 'react';
import {mainValue} from "../../App";
type InputPropsType = {
    value: mainValue
    maxValue: number
}
export const Scoreboard = (props: InputPropsType) => {
    let scoreboardClassName = props.value === props.maxValue? "red": "black"
    let scoreboardMain = "scoreboard"

    if (typeof props.value !== "number") {
        if (props.value === 'Error') {
            scoreboardClassName = 'error'
            scoreboardMain = `scoreboard scoreboardError`
        }  else {
            scoreboardClassName = 'text'
            scoreboardMain = "scoreboard"
        }
    }

    return (
        <div className={scoreboardMain}>
            <div className={scoreboardClassName}>{props.value}</div>
        </div>
    );
};
