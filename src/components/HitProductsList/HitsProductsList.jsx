import React from 'react'
import { HitsProductItem } from '../HitsProductItem/HitsProductItem';

export function HitsProductsList() {
    let products = [];

    for (let i = 0; i < 5; i++) {
        products.push(<HitsProductItem />)
    }
    
    return (
        <>
        {products.map((item, index) => (
            {item}
        ))}
        </>
        
    )
}