import React, {ChangeEvent} from 'react';
import s from '../css/MainTablo.module.css'

type InputProps = {
    error: string | number
    value: number
    callback: (value: number) => void
}
export const Input = (props: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(+e.currentTarget.value)
    }
    const className = props.error === 'Error'? s.inputerror: s.input
    return (
        <input className={className} type={"number"} onChange={onChangeHandler} value={props.value}/>
    );
};