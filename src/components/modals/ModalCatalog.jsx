const ModalCatalog = ({ activeModalCatalog, setActiveModalCatalog }) => {
    const category = ['Телефоны и гаджеты', 'Аудио, видео', 'Техника для дома', 'Для кухни', 'Ноутбуки и компьютеры', 'Красоты и здоровье', 'Строительство и ремонт', 'Игры и развлечения', 'Спорт и увлечения', 'Детское']
    return ( 
        <div className={activeModalCatalog ? 'modal-catalog activeModal' : 'modal-catalog'}>
            <div className="switch" onClick={() => setActiveModalCatalog(false)}></div>
            <div className="modal-catalog-wrapper">
                <div className="category">
                    {
                        category.map((item, i) =>
                            <p key={i}>
                                {item}
                            </p>
                        )
                    }
                </div>
                <div className="gadgets">

                </div>
            </div>
        </div>
    );
}
 
export default ModalCatalog;