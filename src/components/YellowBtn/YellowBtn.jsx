import React from 'react'
import style from './YellowBtn.module.scss'

export function YellowBtn({text}) {
    return (
        <button className={style.headerSliderBtn}>
            {text}
        </button>
    )
}