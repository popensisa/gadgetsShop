import { Slider } from '../../components/Slider/Slider';
import './main.scss'
import Smartphones from '../../assets/images/smartphones.png'
import Earpods from '../../assets/images/earpodsCtg.png'
import LaptopsCtg from '../../assets/images/laptops.png'
import tvCtg from '../../assets/images/tvsCtg.png'
import smartClockCtg from '../../assets/images/smartClockCtg.png'
import washMachCtg from '../../assets/images/washMach.png'
import refrCtg from '../../assets/images/refrCtg.png'
import { Button } from '../../components/Button/Button';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { HitsProductItem } from '../../components/HitsProductItem/HitsProductItem';
import { HitsProductsList } from '../../components/HitProductsList/HitsProductsList';
import { Special } from '../../components/Special/Special';
import { Advantages } from '../../components/Advantages/Advantages';
import { Partners } from '../../components/Partners/Partners';
import { GetTouch } from '../../components/GetTouch/GetTouch';


const Main = () => {
    return ( 
        <div className='content-main'>
            <Slider />
            <div className="container">
                <section className='categoriesBtns'>
                    <Button text="Новогодние скидки"/>
                    <Button text="Топ новинки"/>
                    <Button text="Товары дня"/>
                    <Button text="Рекомендуемое вам"/>
                </section>
            </div>
            <div className="container">
                <section className="popularCategories">
                    <h2>Популярные категории</h2>
                    <div className="popularCatgList">
                        <CategoryItem img={Smartphones} title="Смартфоны"/>
                        <CategoryItem img={Earpods} title="Наушники"/>
                        <CategoryItem img={LaptopsCtg} title="Ноутбуки"/>
                        <CategoryItem img={tvCtg} title="Телевизоры"/>
                        <CategoryItem img={smartClockCtg} title="Смарт-часы"/>
                        <CategoryItem img={washMachCtg} title="Стиральные машины"/>
                        <CategoryItem img={refrCtg} title="Холодильники и морозилки" />
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="hits">
                    <h2>Хиты продаж</h2>
                    <div className="hitsList">
                        <HitsProductItem />
                        <HitsProductItem />
                        <HitsProductItem />
                        <HitsProductItem />
                        <HitsProductItem />
                        <HitsProductItem />
                        <HitsProductItem />
                        <HitsProductItem />
                    </div>
                </section>
            </div>
            
            <Special />
            <Advantages />
            <Partners />
            <GetTouch />
        </div>
     );
}
 
export default Main;