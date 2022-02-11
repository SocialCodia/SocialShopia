import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white">
            <section className="container">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </section>
                <div className="row">
                    <div className="col-lg-3 p-5">
                        <div className="text-center">
                            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
                        </div>
                        <p>India's Biggest Online Ayurvedic Medicine Store And Marketing Company.</p>
                        <div className="d-flex justify-content-between">
                            <img width={140} src="../../sources/images/icons/google-play.jpg" alt="" />
                            <img width={140} src="../../sources/images/icons/app-store.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 p-5">
                        <h5 className="font-weight-bold">Company</h5>
                        <p>From App Store or Google Play</p>
                        <div className="d-flex justify-content-between">
                            <img width={140} src="../../sources/images/icons/google-play.jpg" alt="" />
                            <img width={140} src="../../sources/images/icons/app-store.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 p-5">
                        <h5 className="font-weight-bold">Account</h5>
                        <p>From App Store or Google Play</p>
                        <div className="d-flex justify-content-between">
                            <img width={140} src="../../sources/images/icons/google-play.jpg" alt="" />
                            <img width={140} src="../../sources/images/icons/app-store.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 p-5">
                        <h5 className="font-weight-bold">Install App</h5>
                        <p>From App Store or Google Play</p>
                        <div className="d-flex justify-content-between">
                            <img width={140} src="../../sources/images/icons/google-play.jpg" alt="" />
                            <img width={140} src="../../sources/images/icons/app-store.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;