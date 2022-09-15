import CartData from '../data'
import * as types from './actionTypes'

const initialState = {
    totalAmount: 0,
    totalCount: 0,
    cart: CartData,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOTALS:
            let { totalAmount, totalCount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.totalAmount += itemTotal
                cartTotal.totalCount += amount
                return cartTotal
            },
                {
                    totalAmount: 0,
                    totalCount: 0
                }
            );
            totalAmount = parseFloat(totalAmount.toFixed(2));

            return { ...state, totalAmount, totalCount }
        case types.INCREASE:
            let tempCartInc = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })
            return { ...state, cart: tempCartInc }
        case types.DECREASE:
            let tempCartDec = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
                .filter((cartItem) => cartItem.amount !== 0)
            return { ...state, cart: tempCartDec }
        case types.REMOVE:
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;