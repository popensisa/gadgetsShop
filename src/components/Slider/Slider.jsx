import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle'
import '../../styles.css'
import sliderImg from '../../assets/images/sliderPhone.png'
import style from './Slider.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider() {
    const slides = [];

    for (let i = 0; i < 5; i+= 1) {
        <SwiperSlide key={`slide-${i}`}>
            {/* <img src={`https://picsum.photos/id/${i+1}/500/400`} 
            alt={`Slide ${i}`} /> */}
            <div className={style.headerContent}>
                <div className={style.headerSlider}>
                    <div className={style.container}>
                    <div className={style.headerSliderInfo}>
                        <h1 className={style.headerSliderTitle}>
                            Galaxy Z Flip 3
                        </h1>
                        <p className={style.headerSliderDesc}>
                            Новое поступление 
                            во всех магазинах города
                        </p>
                        <button className={style.headerSliderBtn}>
                        Посмотреть товар
                        </button>
                        
                    </div>
                    <div className={style.headerSliderImage}>
                        <img src={sliderImg} alt="" />
                    </div>
                    </div>
                    
                </div>
            </div>
        </SwiperSlide>
    }
    return (
    //    <div>
    //         <Swiper 
    //         modules={[Navigation, Pagination, Scrollbar, A11y]}
    //         spaceBetween={50}
    //         slidesPerView={3}
    //         navigation
    //         pagination={{ clickable: true }}
    //         scrollbar={{ draggable: true }}
    //         onSwiper={(swiper) => console.log(swiper)}
    //         onSlideChange={() => console.log('slide change')}
    //         >
    //         {slides}
    //     </Swiper>
    //    </div>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            {/* <SwiperSlide > */}
                <div className={style.headerContent}>
                    <div className={style.container}>
                        <div className={style.headerSlider}>
                            <div className={style.headerSliderInfo}>
                                <h1 className={style.headerSliderTitle}>
                                    Galaxy Z Flip 3
                                </h1>
                                <p className={style.headerSliderDesc}>
                                    Новое поступление 
                                    во всех магазинах города
                                </p>
                                <button className={style.headerSliderBtn}>
                                Посмотреть товар
                                </button>
                            </div>
                            <div className={style.headerSliderImage}>
                                <img src={sliderImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            {/* </SwiperSlide> */}
            {/* <SwiperSlide >
                <div className={style.headerContent}>
                    <div className={style.container}>
                        <div className={style.headerSlider}>
                            <div className={style.headerSliderInfo}>
                                <h1 className={style.headerSliderTitle}>
                                    Galaxy Z Flip 3
                                </h1>
                                <p className={style.headerSliderDesc}>
                                    Новое поступление 
                                    во всех магазинах города
                                </p>
                                <button className={style.headerSliderBtn}>
                                Посмотреть товар
                                </button>
                            </div>
                            <div className={style.headerSliderImage}>
                                <img src={sliderImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
        
        
    )
}