import React from 'react';
import {Scoreboard} from "./scoreboard";
import {mainValue} from "../../App";
import {Button} from "../utils/Button";

type CounterPropsType = {
    disabledTablo: boolean
    onclickAddNumber: () => void
    onClickClearValue: () => void
    changeShowTablo: () => void
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
                <Button name={"INC"}
                        callback={props.onclickAddNumber}
                        disabled={dissabledAdd}
                />
                <Button name={'reset'}
                        callback={props.onClickClearValue}
                        disabled={dissabledClear}
                />
                <Button name={'set'}
                        callback={props.changeShowTablo}
                        disabled={false}
                />
            </div>
        </div>
    );
};