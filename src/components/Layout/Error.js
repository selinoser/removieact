import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="page-404 section--bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-404__wrap">
                            <div className="page-404__content">
                                <h1 className="page-404__title">404</h1>
                                <p className="page-404__text">Aradığınız sayfa bulunamadı!!!</p>
                                <Link to="/" className="page-404__btn">Ana Sayfaya Dön</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;
