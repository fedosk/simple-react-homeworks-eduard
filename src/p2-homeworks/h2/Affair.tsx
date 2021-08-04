import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (deleteAffairCallback: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

    return (

        <div className={s.affairWrapper}>
            <div className={s.affarText}>{props.affair.name}</div>
            <SuperButton
                btn// пропсу с булевым значением не обязательно указывать true
                onClick={deleteCallback}
            >
                X {/*// название кнопки попадёт в children*/}
            </SuperButton>
        </div>
    )
}

export default Affair
