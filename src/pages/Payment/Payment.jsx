import React, {useState} from 'react'
import './index.scss'
// import "./style.css"
import phoneGalaxyA52 from "./images/phoneGalaxyA52.svg"
import chehol from './images/chehol.svg'
import Line from './images/Line.png'
import visa from './images/visa.png'
import coins from './images/coins.png'
import balance from './images/balance.png'
import elsom from './images/elsom.png'
import mastercard from './images/mastercard.png'

const Payment = () => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('это поле не может быть пустым')
    const [address, setAddress] = useState('')
    const [addressError, setAddressError] = useState('это поле не может быть пустым')

    const [active, setActive] = useState(0)

    return (
        <div className="payment">
            <div className="pagePay">
                <div className="payContainer">
                    <div className="del">
                        <div className="delivery">
                            <h2>Доставка и оплата</h2>
                            <div className="way">
                                <b>Способ доставки</b>
                                <div className="li">
                                    <button className="sum" style={active === 0 ? {
                                        border: '1px solid blue',
                                        backgroundColor: 'lightblue'
                                    } : {}} onClick={() => setActive(0)}> Самовывоз
                                    </button>
                                    <button className="sum" style={active === 1 ? {
                                        border: '1px solid blue',
                                        backgroundColor: 'lightblue'
                                    } : {}} onClick={() => setActive(1)}> Доставка
                                    </button>
                                </div>
                                <h3>Личные данные</h3>
                                <section className="personal">
                                    <div className="name">
                                        <label>Имя*</label>
                                        <input name={name} className="input" type="text" placeholder="Имя"/>
                                    </div>
                                    <form className="name">
                                        <label>Фамилия*</label>
                                        <input name={lastname} className="input" type="text" placeholder="Фамилия"/>
                                    </form>
                                </section>
                                <section className="paySection">
                                    <div className="contact">
                                        <p>Контактный телефон*</p>
                                        <input name={number} className="input" type="number"
                                               placeholder="Контактный телефон..."/>
                                    </div>
                                    <div className="email">
                                        <p>Электронный адрес*</p>
                                        <input name={email} className="input2" type="text"
                                               placeholder="Электронный адрес..."/>
                                    </div>
                                    <div className="address">
                                        <p>Адрес доставки*</p>
                                        <input name={address} className="input2" type="text"
                                               placeholder="Адрес доставки..."/>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="inline">
                            <h1>Детали заказа</h1>
                            <div className="inline-phone">
                                <img src={chehol} alt=""/>
                                <div className="inline-flex">
                                    <h2>Смартфон Samsung Galaxy A52 5G <br/> 128 Гб EU</h2>
                                    <div className="inline-text">
                                        <smll>Приобрести позже</smll>
                                        <small className="small">Удалить</small>
                                    </div>
                                </div>
                                <div className="counter">
                                    <b>45 000 сомов</b>
                                    <div className="plus">
                                        <button className="btn1">+</button>
                                        <span>1</span>
                                        <button>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="inline-phone">
                                    <img src={phoneGalaxyA52} alt=""/>
                                    <div className="inline-flex">
                                        <h2>Чехол для Samsung Galaxy A52</h2>
                                        <div className="inline-text">
                                            <small>Приобрести позже</small>
                                            <small className="small">Удалить</small>
                                        </div>
                                    </div>
                                    <div className="counter">
                                        <b>500 сомов</b>
                                        <div className="plus">
                                            <button className="btn1">+</button>
                                            <span>1</span>
                                            <button>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="line" src={Line} alt=""/>
                            <p className="som"><b>Итого:</b> 50 000 сомов</p>
                            <div className="visa">
                                <div className="els-inner">
                                    <img src={coins} alt=""/>
                                    <p>Наличными</p>
                                </div>
                                <div className="els-inner">
                                    <img className="el-visa" src={visa} alt=""/>
                                    <p className="p-visa">Картой VISA</p>
                                </div>
                                <div className="els-inner">
                                    <img className="elsom" src={elsom} alt=""/>
                                    <p className="p-elsom">Mastercard</p>
                                </div>
                                <div className="els-inner">
                                    <img className="master" src={mastercard} alt=""/>
                                    <p className="p-master">Элсом</p>
                                </div>
                                <div className="els-inner">
                                    <img className="balance" src={balance} alt=""/>
                                    <p className="p-balance">Balance KG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;