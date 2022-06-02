import React from 'react';
import {Input} from "../utils/Input";
import {Button} from "../utils/Button";
import s from '../css/MainTablo.module.css'

type MainTablo = {
    setNewMaxMinValue: (minValue: number, maxValue: number) => void
    minValue: number
    maxValue: number
    value: number | string
    disabledMainTablo: boolean
    onChangeStartValue: (startValue: number) => void
    onChangeMaxValue: (maxValue: number) => void

}

export const MainTablo = (props: MainTablo) => {
    const setNewMaxMinValue = () => {
        props.setNewMaxMinValue(props.minValue, props.maxValue)
    }

    const onChangeStartValue = (startValue: number) => {
        props.onChangeStartValue(startValue)
    }
    const onChangeMaxValue = (maxValue: number) => {
        props.onChangeMaxValue(maxValue)
    }
    return (
        <div>
            <div className={s.maincontainer}>
                <div className={s.container}>
                    <span className={s.spantext}>max value:</span>
                    <Input error={props.value}
                        value={props.maxValue}
                           callback={onChangeMaxValue}/>
                </div>
                <div className={s.container}>
                    <span className={s.spantext}>start value:</span>
                    <Input error={props.value}
                        value={props.minValue}
                           callback={onChangeStartValue}/>
                </div>
            </div>
            <div className={s.buttons}>
                <Button name={'set'} callback={setNewMaxMinValue} disabled={props.disabledMainTablo}></Button>
            </div>
        </div>
    );
};