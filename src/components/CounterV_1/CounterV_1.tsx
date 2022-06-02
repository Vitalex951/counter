import React, {useEffect, useState} from 'react';
import {mainValue, valuePropsType} from "../../App";
import {MainTablo} from "./MainTablo";
import {Tablo} from "./Tablo";

const CounterV1 = () => {
    const textSpan = "enter values and press 'set'"
    let [maxValue, setMaxValue] = useState<valuePropsType>(0)
    let [startValue, setStartValue] = useState<valuePropsType>(0)
    let [value, setValue] = useState<mainValue>(textSpan)
    const [disabledMainTablo, setDisabledMainTablo] = useState<boolean>(true)
    const [disabledTablo, setDisabledTablo] = useState<boolean>(true)

    useEffect(() => {
        let maxValueLocalstorage = localStorage.getItem('MaxValue')
        let startValueLocalstorage = localStorage.getItem('StartValue')
        let max
        let start
        if (maxValueLocalstorage) {
            max = JSON.parse(maxValueLocalstorage)
            setMaxValue(max)
        }
        if (startValueLocalstorage) {
            start = JSON.parse(startValueLocalstorage)
            setStartValue(start)

        }
        if (max > 0 && max > start && start >= 0) {
            setDisabledTablo(false)
            setValue(start)

        }

    }, [])
    useEffect(() => {
        localStorage.setItem('MaxValue', JSON.stringify(maxValue))
        localStorage.setItem('StartValue', JSON.stringify(startValue))

    }, [maxValue, startValue])

    const onclickAddNumber = () => {
        if (typeof value === "number") {
            setValue(value + 1)
        }
    }
    const onClickClearValue = () => {
        setValue(startValue)
    }

    const setNewMaxMinValue = (startValue: number) => {
        setDisabledMainTablo(true)
        setDisabledTablo(false)
        setValue(startValue)
    }
    const onChangeMaxValue = (maxValue: number) => {
        setDisabledTablo(true)
        setDisabledMainTablo(false)
        setMaxValue(maxValue)

        if (maxValue < 0 || maxValue <= startValue || startValue < 0) {
            setValue("Error")
            setDisabledMainTablo(true)
        } else {
            setValue(textSpan)
            setDisabledMainTablo(false)
        }

    }
    const onChangeStartValue = (startValue: number) => {
        setDisabledTablo(true)
        setDisabledMainTablo(false)
        setStartValue(startValue)

        if (maxValue < 0 || maxValue <= startValue || startValue < 0) {
            setValue("Error")
            setDisabledMainTablo(true)
        } else {
            setValue(textSpan)
            setDisabledMainTablo(false)
        }
    }
    return (
        <>
            <div className='container'>
                <MainTablo setNewMaxMinValue={setNewMaxMinValue}
                           value={value}
                           minValue={startValue}
                           maxValue={maxValue}
                           onChangeMaxValue={onChangeMaxValue}
                           onChangeStartValue={onChangeStartValue}
                           disabledMainTablo={disabledMainTablo}
                />
            </div>
            <div className='container'>
                <Tablo onclickAddNumber={onclickAddNumber}
                       onClickClearValue={onClickClearValue}
                       nameButtonAdd={"INC"}
                       nameButtonClear={'reset'}
                       value={value}
                       disabledTablo={disabledTablo}
                       maxValue={maxValue}
                />
            </div>
        </>
)
    ;
};

export default CounterV1;