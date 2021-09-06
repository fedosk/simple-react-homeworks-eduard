import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }
) => {
    const mappedOptions = options ? options.map((o, i) => (
        <option key={o + '-' + i}
                value={o}
                selected={value === o}
                className={styles.option}>{o}</option>
    )) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={styles.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
