import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="section section--first section--bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__wrap">
                                <h2 className="section__title">İletişim</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div>
                                <p className="section__text">Selin Öser | 2022</p>
                                <p className="section__text section__text--last-with-margin">Github : <a href="https://github.com/selinoser">https://github.com/selinoser</a></p>
                                <p className="section__text section__text--last-with-margin">Linkedin : <a href="https://www.linkedin.com/in/selinoser/">https://www.linkedin.com/in/selinoser/</a></p>
                                <p className="section__text section__text--last-with-margin">İletişim : <a href="mailto:selinoser@gmail.com ">selinoser@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
