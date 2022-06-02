import React, {useState} from 'react';
import './App.css';
import CounterV1 from "./components/CounterV_1/CounterV_1";
import {Counter} from "./components/Counter/Counter";
import {Button} from "./components/utils/Button";


export type valuePropsType = number
export type mainValue = number | string


function App() {
    const [counter, setCounter] = useState<boolean>(true)

    return (
        <div className="App">
            <Button name={'v1'} callback={()=> setCounter(!counter)} disabled={false}/>
            {counter ?
                <CounterV1/>
                : <Counter/>}
        </div>
    );
}

export default App;
