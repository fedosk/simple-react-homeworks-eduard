import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (setNameCallback: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = (error ==="Error!") ? s.error : s.inputStyle;

    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.inputDefaultStyle}`}/>
            <span className={s.errorSpan}>{error}</span>
            <button onClick={addUser} className={s.addButton}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
