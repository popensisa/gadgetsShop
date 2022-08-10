import { Outlet } from "react-router-dom";
import './layout.scss'
import map from '../../assets/images/map.svg'
import optimaBank from '../../assets/images/optima.svg'
import mbank from '../../assets/images/mbank.svg'
import balance from '../../assets/images/balance.svg'
import Facebook from '../../assets/images/Facebook.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Twitter from '../../assets/images/Twitter.svg'
import YouTube from '../../assets/images/YouTube.svg'
import logo from '../../assets/images/logo.svg'


const Layout = () => {
    return (
        <div className="page">
            <header>
                <div className="d-flex container">
                    <div className="top">
                        <nav className="nav">
                            <li>Ру</li>
                            <li>Бишкек</li>
                            <li>Магазины</li>
                            <li>Доставка</li>
                        </nav>
                        <nav className="nav-number">
                            <li>Рассрочка</li>
                            <li>+996 550 00 55 00</li>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="content">
                <div className="container">
                    <div className="low">
                        <img src={logo} alt='logo'/>
                        <div className="low-catalog">
                            <div className="burger"></div>
                            <h1>Каталог</h1>
                        </div>
                        <form>
                            <input placeholder="Искать..." />
                            <div>search</div>
                        </form>
                        <div>
                            <h1>Войти</h1>
                        </div>
                        <div>
                            <h1>Избранное</h1>
                        </div>
                        <div>
                            <h1>Корзина</h1>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>

            <footer>
                <div className="footer container">
                    <h1 className="footer-title">BTech</h1>
                    <div className="line"></div>
                    <div className="footer-nav">
                        <div className='footer-nav-text'>
                            <div className="footer-nav-text-item">
                                <h1>Покупателям</h1>
                                <h2>Каталог</h2>
                                <h2>FAQ</h2>
                                <h2>Акции</h2>
                                <h2>Доставка</h2>
                                <h2>Обмен и возврат</h2>
                                <h2>Гарактия</h2>
                                <h2>Рассрочка</h2>
                            </div>
                            <div className="footer-nav-text-item">
                                <h1>Бизнес-партнерам</h1>
                                <h2>Условия сотрудничества</h2>
                                <h2>Техника для бизнеса</h2>
                                <h2>Поставщикам</h2>
                                <h2>Аренда</h2>
                            </div>
                            <div className="footer-nav-text-item">
                                <h1>О нас</h1>
                                <h2>О BTech</h2>
                                <h2>Вакансии</h2>
                                <h2>Отзывы</h2>
                                <h2>Партнерам</h2>
                                <h2>Инвесторам</h2>
                                <h2>Политика магазина</h2>
                            </div>
                            <div className="footer-nav-text-item">
                                <h1>Обратная связь</h1>
                                <h2>Контакты</h2>
                                <h2>WhatsApp</h2>
                                <h2>Telegram</h2>
                                <h2>Оставить отзыв о качестве товара</h2>
                                <h2>Канал в Telegram</h2>
                            </div>
                        </div>
                        <div className="footer-nav-img">
                            <img src={map} alt='map' />
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="footer-pay">
                        <div className="footer-pay-get">
                            <h1>Мы принимаем к оплате</h1>
                            <img src={optimaBank} alt='optima bank' />
                            <img src={mbank} alt='mbank' />
                            <img src={balance} alt='balance' />
                        </div>
                        <div className="footer-pay-social">
                            <h1>Мы в социальных сетях</h1>
                            <img src={Instagram} alt='instagram' />
                            <img src={Twitter} alt='Twitter' />
                            <img src={Facebook} alt='Facebook' />
                            <img src={YouTube} alt='Youtube' />
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="footer-company">
                        <span>Copyright Btech 2018-2021</span>
                        <span>Политика конфиденциальности</span>
                        <span>Публичная оферта</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;