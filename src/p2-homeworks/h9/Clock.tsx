import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const getTwoDigitsTime = (num: number) => num < 10 ? `0${num}`: `${num}`

    let time = date

    const timeF = (date: Date | undefined) => {
        if (time) {
            let hours = getTwoDigitsTime(time.getHours())
            let minutes = getTwoDigitsTime(time.getMinutes())
            let seconds =  getTwoDigitsTime(time.getSeconds())
            return `${hours}:${minutes}:${seconds}`
        }
    }

    const dateF = (date: Date | undefined) => {
        if (time) {
            let day = getTwoDigitsTime(time.getDay())
            let month = getTwoDigitsTime(time.getMonth())
            let yar =  getTwoDigitsTime(time.getFullYear())
            return `${day}.${month}.${yar}`
        }
    }

    const stringTime = timeF(date) // fix with date
    const stringDate = dateF(date) // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock






