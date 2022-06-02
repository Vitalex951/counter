import React from 'react';
import {Button} from "../utils/Button";
import {mainValue} from "../../App";
import {Scoreboard} from "./scoreboard";

type CounterPropsType = {
    disabledTablo: boolean
    nameButtonAdd: string
    nameButtonClear: string
    onclickAddNumber: () => void
    onClickClearValue: () => void
    value: mainValue
    maxValue: number
}
export const Tablo = (props: CounterPropsType) => {
    let dissabledAdd
    let dissabledClear
    if (props.disabledTablo) {
        dissabledAdd = true
        dissabledClear = true
    } else {
        dissabledAdd = props.value >= props.maxValue
        dissabledClear = props.value === 0
    }


    return (
        <div>
            <Scoreboard value={props.value}
                        maxValue={props.maxValue}/>
            <div className='buttons'>
                <Button name={props.nameButtonAdd}
                        callback={props.onclickAddNumber}
                        disabled={dissabledAdd}
                />
                <Button name={props.nameButtonClear}
                        callback={props.onClickClearValue}
                        disabled={dissabledClear}
                />
            </div>
        </div>
    );
};