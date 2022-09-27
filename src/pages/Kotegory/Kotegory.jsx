import "./kotegory.scss"
import React from 'react';
import miniPhone from "../../assets/images/mini_phones.png"
import bigPhone from "../../assets/images/big_phone.png"
import stars from "../../assets/images/stars.svg"
import heart from "../../assets/images/heart.svg"
import line_d from "../../assets/images/line_d.svg"

export default function Kotegory() {
	return (
    <div className='main_wrapper'>
      <div className="container">
        <div className="text_kot">
          <div className="smart_main">
            <p className='slesh'>Главная  /  Смартфоны</p>
            <div className="smart_cult">
              <h2 className='pult'>Смартфоны</h2>
              <div className="system">
                <h3>Операционная система</h3>
                <img className='line_d' src={line_d} alt="" />
              </div>
              <div className="system">
                <h3>Бренд</h3>
                <img className='line_d' src={line_d} alt="" />
              </div>
              <div className="system">
                <h3>Цена</h3>
                <img className='line_d' src={line_d} alt="" />
              </div>
              <div className="system">
                <h3>Год выпуска</h3>
                <img className='line_d' src={line_d} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="phone_kot">
            <div className="krot">
              <div className="img_phone">
                <img src={bigPhone} alt="" />
                <img src={miniPhone} alt="" />
              </div>
              <div className="text_redmi">
                <h1>Смартфон Redmi Note 10 128 <br /> Гб(EU)</h1>
                <div className="review">
                  <img src={stars} alt="" />
                  <p className='fiveOt'>15 отзывов</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Процессор</p>
                <p className='black_p'>8-Core Qualcomm Snapdragon 678</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Основная камера</p>
                <p className='black_p'>48 MP + 8 MP + 2MP + 2MP</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Фронтальная камера</p>
                <p className='black_p'>13 MP</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Встроенная память</p>
                <p className='black_p'>128 Гб</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Оперативная память</p>
                <p className='black_p'>6 Гб</p>
                </div>
              </div>
              <div className="button_redmi">
                <h2 className='ashka'>45 000 сом</h2>
                <button className='but_heart'>В корзину</button>
                <div className="nrav">
                  <img src={heart} alt="" />
                  <p className='puka'>Нравится</p>
                </div>
              </div>
            </div>
              {/* ********************************************** */}
              <div className="korot">
                <div className="img_phone">
                  <img src={bigPhone} alt="" />
                  <img src={miniPhone} alt="" />
                </div>
                <div className="text_redmi">
                  <h1>Смартфон Redmi Note 10 128 <br /> Гб(EU)</h1>
                  <div className="review">
                    <img src={stars} alt="" />
                    <p className='fiveOt'>15 отзывов</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Процессор</p>
                  <p className='black_p'>8-Core Qualcomm Snapdragon 678</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Основная камера</p>
                  <p className='black_p'>48 MP + 8 MP + 2MP + 2MP</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Фронтальная камера</p>
                  <p className='black_p'>13 MP</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Встроенная память</p>
                  <p className='black_p'>128 Гб</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Оперативная память</p>
                  <p className='black_p'>6 Гб</p>
                  </div>
                </div>
                <div className="button_redmi">
                  <h2 className='ashka'>45 000 сом</h2>
                  <button className='but_heart'>В корзину</button>
                  <div className="nrav">
                    <img src={heart} alt="" />
                    <p className='puka'>Нравится</p>
                  </div>
                </div>
              </div>
                {/* ****************************************** */}
              <div className="korot">
                <div className="img_phone">
                  <img src={bigPhone} alt="" />
                  <img src={miniPhone} alt="" />
                </div>
                <div className="text_redmi">
                  <h1>Смартфон Redmi Note 10 128 <br /> Гб(EU)</h1>
                  <div className="review">
                    <img src={stars} alt="" />
                    <p className='fiveOt'>15 отзывов</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Процессор</p>
                  <p className='black_p'>8-Core Qualcomm Snapdragon 678</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Основная камера</p>
                  <p className='black_p'>48 MP + 8 MP + 2MP + 2MP</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Фронтальная камера</p>
                  <p className='black_p'>13 MP</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Встроенная память</p>
                  <p className='black_p'>128 Гб</p>
                  </div>
                  <div className="kamera">
                  <p className='gray_p'>Оперативная память</p>
                  <p className='black_p'>6 Гб</p>
                  </div>
                </div>
                <div className="button_redmi">
                  <h2 className='ashka'>45 000 сом</h2>
                  <button className='but_heart'>В корзину</button>
                  <div className="nrav">
                    <img src={heart} alt="" />
                    <p className='puka'>Нравится</p>
                  </div>
                </div>
            </div>
            {/* ************************ */}
            <div className="korot">
              <div className="img_phone">
                <img src={bigPhone} alt="" />
                <img src={miniPhone} alt="" />
              </div>
              <div className="text_redmi">
                <h1>Смартфон Redmi Note 10 128 <br /> Гб(EU)</h1>
                <div className="review">
                  <img src={stars} alt="" />
                  <p className='fiveOt'>15 отзывов</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Процессор</p>
                <p className='black_p'>8-Core Qualcomm Snapdragon 678</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Основная камера</p>
                <p className='black_p'>48 MP + 8 MP + 2MP + 2MP</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Фронтальная камера</p>
                <p className='black_p'>13 MP</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Встроенная память</p>
                <p className='black_p'>128 Гб</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Оперативная память</p>
                <p className='black_p'>6 Гб</p>
                </div>
              </div>
              <div className="button_redmi">
                <h2 className='ashka'>45 000 сом</h2>
                <button className='but_heart'>В корзину</button>
                <div className="nrav">
                  <img src={heart} alt="" />
                  <p className='puka'>Нравится</p>
                </div>
              </div>
            </div>
            {/* ********************************** */}
            <div className="korot">
              <div className="img_phone">
                <img src={bigPhone} alt="" />
                <img src={miniPhone} alt="" />
              </div>
              <div className="text_redmi">
                <h1>Смартфон Redmi Note 10 128 <br /> Гб(EU)</h1>
                <div className="review">
                  <img src={stars} alt="" />
                  <p className='fiveOt'>15 отзывов</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Процессор</p>
                <p className='black_p'>8-Core Qualcomm Snapdragon 678</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Основная камера</p>
                <p className='black_p'>48 MP + 8 MP + 2MP + 2MP</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Фронтальная камера</p>
                <p className='black_p'>13 MP</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Встроенная память</p>
                <p className='black_p'>128 Гб</p>
                </div>
                <div className="kamera">
                <p className='gray_p'>Оперативная память</p>
                <p className='black_p'>6 Гб</p>
                </div>
              </div>
              <div className="button_redmi">
                <h2 className='ashka'>45 000 сом</h2>
                <button className='but_heart'>В корзину</button>
                <div className="nrav">
                  <img src={heart} alt="" />
                  <p className='puka'>Нравится</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
	)
}