const ModalLanguage = ({ languages, changeLang, activeLang, selectedLang }) => {
    return (
        <div className={activeLang ? 'modal-lang activeModal' : 'modal-lang '}>
            <div className="figure"></div>
            <div className="languages">
                {
                    languages.map((item, i) =>
                        <p className={selectedLang == i ? 'languages-active' : ''}  key={i} onClick={() => changeLang(i)}>
                            {item}
                        </p>
                    )
                }
            </div>
        </div>
    );
}

export default ModalLanguage;