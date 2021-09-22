import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperDoubleRange.module.css'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    //onChangeRange?: (value: [number, number]) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
       onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (e: number[]) => {
       onChangeRange && onChangeRange(e)
    }

     return (
            <div className={s.slider_wrapper}>
                <Range onChange={handleChange} value={value} pushable={true}/>
            </div>
     )
}

export default SuperDoubleRange



