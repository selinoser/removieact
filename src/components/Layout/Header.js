import React from 'react';
import { NavLink } from 'react-router-dom';

const txtColor = {
    color: "#ff55a5"
}

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar header__content">
                                <NavLink to="/" className="header__logo white">
                                    <h1 className=""><span style={txtColor}>RE</span>MOVIE<span style={txtColor}>ACT</span></h1>
                                </NavLink>
                                <button className="navbar-toggler header__btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <div className="header__line"></div>
                                    <ul className="navbar-nav header__nav">
                                        <li className="header__nav-item nav-item"><NavLink to="/populer" className="header__nav-link">POPÜLER</NavLink></li>
                                        <li className="header__nav-item nav-item"><NavLink to="/top-rated" className="header__nav-link">EN ÇOK BEĞENİLENLER</NavLink></li>
                                        <li className="header__nav-item nav-item"><NavLink to="/upcoming" className="header__nav-link">GELECEK FİLMLER</NavLink></li>
                                        <li className="header__nav-item nav-item"><NavLink to="/contact" className="header__nav-link">İLETİŞİM</NavLink></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
