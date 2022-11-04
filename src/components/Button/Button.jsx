import React from 'react'
import style from './Button.module.scss'

export function Button({text}) {
    return (
        <button className={style.categoryMain}>
            {text}
        </button>
    )
}