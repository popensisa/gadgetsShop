import React, { useState } from 'react'
import style from '../../pages/Basket/Basket.module.scss'

export default function BasketForm() {
    const payWays = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZmKDT3YEVgpnUa85AsdBqvh8OGaUSqd4-Q&usqp=CAU',
            title: 'Наличными',
        },
        {
            id: 2,
            img: 'https://pngimg.com/uploads/visa/visa_PNG30.png',
            title: 'Картой VISA',
        },
        {
            id: 3,
            img: 'https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png',
            title: 'Mastercard',
        },
        {
            id: 4,
            img: 'https://elsom.kg/wp-content/uploads/2020/12/logo-Elsom-RGB-72.png',
            title: 'Элсом',
        },
        {
            id: 5,
            img: 'https://www.tulpar-card.kg/wp-content/uploads/2020/08/balance.png',
            title: 'Balance KG',
        },
    ]
    const inputs = [
        {
            id: 1,
            type: 'text',
            label: 'Имя',
            name: 'name',
            placeholder: 'Имя',
        },
        {
            id: 2,
            type: 'text',
            label: 'Фамилия',
            name: 'surname',
            placeholder: 'Фамилия',
        },
        {
            id: 3,
            type: 'text',
            label: 'Контактный телефон',
            name: 'phoneNumber',
            placeholder: '+996',
        },
        {
            id: 4,
            type: 'text',
            label: 'Электронная почта',
            name: 'email',
            placeholder: 'example@mail.com',
        },
        {
            id: 5,
            type: 'text',
            label: 'Адрес доставки',
            name: 'address',
            placeholder: 'Улица, номер дома, номер квартиры',
        },
    ]
    const [form, setForm] = useState({
        radio: '',
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        address: "",
        payment: "",
    })
    const [activeIndex, setActiveIndex] = React.useState(-1);

    // const handleClick = event => {
    //     setIsActive(!isActive);
    //     console.log(isActive)
    // };

    function addForm(event) {
        event.preventDefault()
        setForm(form)
        console.log(form)
    }

    const inputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }



    return (
        <div className={style.delivery}>
            <h1>Доставка и оплата</h1>
            <form action="#" onSubmit={addForm}>
                <div className={style.delWay}>
                    <h3>Способ доставки</h3>
                    <div className={style.delWay__items}>
                        <div className={style.delWay__item}>
                            <input type="radio" name="radio" value="Самовывоз" onChange={inputChange} />
                            <label>Самовывоз</label>
                        </div>
                        <div className={style.delWay__item}>
                            <input type="radio" name="radio" value="Доставка курьером" onChange={inputChange} />
                            <label>Доставка курьером</label>
                        </div>
                    </div>
                </div>
                <div className={style.form}>
                    <h3>Личные данные</h3>
                    <div className={style.delForm}>
                        {/* {inputs.map((elem, index) => (
                            <div className={style.inputBox} key={index}>
                                <label>{elem.label}*</label>
                                <input
                                    type={elem.type}
                                    placeholder={elem.placeholder}
                                    name={elem.name}
                                    // value={elem.name}
                                    onChange={inputChange}
                                    required
                                />
                            </div>
                        ))} */}
                        <div className={style.inputBox}>
                            <label>Имя*</label>
                            <input
                                type="text"
                                name='name'
                                placeholder='Имя'
                                value={form.name}
                                onChange={inputChange}
                                required
                            />
                        </div>
                        <div className={style.inputBox}>
                            <label>Фамилия*</label>
                            <input
                                type="text"
                                placeholder='Фамилия'
                                name='surname'
                                value={form.surname}
                                onChange={inputChange}
                                required
                            />
                        </div>
                        <div className={`${style.inputBox} ${style.inputItem3}`}>
                            <label>Контактный телефон*</label>
                            <input
                                type="text"
                                placeholder='+996'
                                name='phoneNumber'
                                value={form.phoneNumber}
                                onChange={inputChange}
                                required
                            />
                        </div>
                        <div className={`${style.inputBox} ${style.inputItem4}`}>
                            <label>Электронная почта</label>
                            <input
                                className={style.inputInfo}
                                type="text"
                                name="email"
                                placeholder='example@mail.com'
                                value={form.email}
                                onChange={inputChange}
                                required
                            />
                        </div>
                        <div className={`${style.inputBox} ${style.inputItem5}`}>
                            <label>Адрес доставки</label>
                            <input
                                className={style.inputInfo}
                                type="text"
                                name="address"
                                placeholder='Улица, номер дома, номер квартиры'
                                value={form.address}
                                onChange={inputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={style.payment}>
                        <h3>Способ оплаты</h3>
                        <div className={style.paymentItems}>
                            {payWays.map((elem, index) => (
                                <div
                                    className={activeIndex === index ? style.paymentActive : style.paymentItem}
                                    key={index}
                                    onClick={() => setActiveIndex(index, setForm({ ...form, payment: index + 1 }))}
                                >
                                    <img src={elem.img} alt="" />
                                    <p>{elem.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={style.paymentBtn}>Оплатить</button>
                </div>
            </form >

        </div >
    )
}
