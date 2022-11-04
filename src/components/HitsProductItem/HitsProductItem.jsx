import React, {isValidElement, useState} from 'react'
import productItemImg from '../../assets/images/productImgOne.png'
import {ReactComponent as Like} from '../../assets/images/Icon.svg'
import style from './HitsProductItem.module.scss'

export function HitsProductItem() {
    const [like, setLike] = useState(false);

    function isActive() {
        setLike(like => !like)
        console.log('is active')
    }

    let activeLike = like ? ' active' : '';
    return (
        <>
            <div className={style.productItem}>
                <img src={productItemImg} alt="" />
                <p className={style.productItemHit}>
                рассрочка от 4809с./ месяц 
                </p>
                <div className={style.productItemInfo}>
                    <a href="" className={style.productItemText}>
                    Смартфон Samsung Galaxy A 52 5G (EU)
                    </a>
                    <div className={style.productItemPrice}>
                        <span>45 000 cом</span>
                        {/* <div className={`productItemLike${activeLike}`} onClick={isActive}> */}
                            <Like className={style.like}  />
                            
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}