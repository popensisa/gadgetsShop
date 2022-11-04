import React from 'react';
import style from './SpecialItem.module.scss'

export function SpecialItem({title, img}) {
    return (
        <div className={style.specialItem}>
            <p className={style.specialItemTitle}>
                {title}
            </p>
            <div className={style.specialItemIllustr}>
                {/* <span className={style.specialDiscMain}></span> */}
                <img src={img} alt="" />
            </div>

        </div>
    )
}