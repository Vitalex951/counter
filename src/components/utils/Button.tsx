import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}


export const Button = (props: ButtonPropsType) => {
    return (
        <button className='button' disabled={props.disabled} onClick={props.callback}>{props.name}</button>
    );
};