import React from 'react'
import style from './CategoryItem.module.scss'

export function CategoryItem({img, title}) {
    return (
        <div className={style.popularCatgItem}> 
            <img src={img} alt="" />
            <p>{title}</p>
        </div>
    )
}