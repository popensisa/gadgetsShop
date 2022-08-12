const ModalCountry = ({ activeCountry, countries, changeCountry, selectedCountry }) => {
    return ( 
        <div className={activeCountry ? 'modal-country activeModal' : 'modal-country'}>
            <div className="figure"></div>
            <div className="countries">
                {
                    countries.map((item, i) =>
                        <p className={selectedCountry == i ? 'countries-active' : ''} key={i} onClick={() => changeCountry(i)}>
                            {item}
                        </p>
                    )
                }
            </div>
        </div>
     );
}
 
export default ModalCountry;