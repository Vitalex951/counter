import React, {useEffect, useState} from 'react';
import {MainTablo} from "./MainTablo";
import {Tablo} from "./Tablo";
import {mainValue, valuePropsType} from "../../App";

export const Counter = () => {
    const textSpan = "enter values and press 'set'"
    let [maxValue, setMaxValue] = useState<valuePropsType>(0)
    let [startValue, setStartValue] = useState<valuePropsType>(0)
    let [value, setValue] = useState<mainValue>(textSpan)


    const [disabledMainTablo, setDisabledMainTablo] = useState<boolean>(false)
    const [disabledTablo, setDisabledTablo] = useState<boolean>(true)
    const [showSetTablo, setShowTablo] = useState<boolean>(true)

    useEffect(() => {
        let maxValueLocalstorage = localStorage.getItem('MaxValue')
        let startValueLocalstorage = localStorage.getItem('StartValue')
        let max
        let start
        setDisabledTablo(false)
        if (maxValueLocalstorage) {
            max = JSON.parse(maxValueLocalstorage)
            setMaxValue(max)
        }
        if (startValueLocalstorage) {
            start = JSON.parse(startValueLocalstorage)
            setStartValue(start)

        }
        if (max > 0 && max > start && start >= 0) {
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
        setShowTablo(false)
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
    const changeShowTablo = () => {
        setShowTablo(true)
    }
    return (
        <>
            {showSetTablo && <div className='container'>
                <MainTablo setNewMaxMinValue={setNewMaxMinValue}
                           value={value}
                           minValue={startValue}
                           maxValue={maxValue}
                           onChangeMaxValue={onChangeMaxValue}
                           onChangeStartValue={onChangeStartValue}
                           disabledMainTablo={disabledMainTablo}
                />
            </div>}
            {!showSetTablo && <div className='container'>
                <Tablo onclickAddNumber={onclickAddNumber}
                       onClickClearValue={onClickClearValue}
                       value={value}
                       disabledTablo={disabledTablo}
                       maxValue={maxValue}
                       changeShowTablo={changeShowTablo}
                />
            </div>}
        </>
    );
};