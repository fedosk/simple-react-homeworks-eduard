import React, {useState} from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";


function Header() {

    const [btn, setBtn] = useState<boolean>(false)

    return (
        <div  className={btn ? `${styles.header} ${styles.activeNav}`: styles.header}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.preJunior}`}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={styles.active}>Pre Junior</NavLink>
                </li>
                <li className={`${styles.item} ${styles.junior}`}>
                    <NavLink to={PATH.JUNIOR} activeClassName={styles.active}>Junior</NavLink>
                </li>
                <li className={`${styles.item} ${styles.juniorPlus}`}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={styles.active}>Junior+</NavLink>
                </li>
                <li className={`${styles.item} ${styles.btn}`} onClick={() => setBtn(!btn)}>
                    {btn ? 'x' : '>'}
                </li>
            </ul>
        </div>
    )
}

export default Header
