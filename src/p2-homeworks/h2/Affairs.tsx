import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (setFilter: FilterType) => void
    deleteAffairCallback: (deleteAffairCallback: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.container}>

            {mappedAffairs}

            <div className={s.btnWrapper}>
                <SuperButton btn onClick={setAll}>All</SuperButton>
                <SuperButton btn onClick={setHigh}>High</SuperButton>
                <SuperButton btn onClick={setMiddle}>Middle</SuperButton>
                <SuperButton btn onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
