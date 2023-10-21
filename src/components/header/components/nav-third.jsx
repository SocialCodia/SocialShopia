import { Link } from "react-router-dom";

const NavThird = () => {

    return (
        <div className="navThird border-bottom d-none d-lg-block">
            <div className="ccontainer d-flex justify-content-between ">
                <div className="right">
                    <p>Home</p>
                </div>
                <div className="middle">
                    <ul className="d-flex list-unstyled">
                        <li><Link to='/'>Flash Deals</Link></li>
                        <li><Link to='/'>Brands</Link></li>
                        <li><Link to='/'>Blogs</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                        <li><Link to='/'>Blogs</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </div>
                <div className="left d-flex">
                    <div className="icon">
                        <img src="../../sources/images/icons/icon-headphone-white.svg" alt="" />
                    </div>
                    <div className="content">
                        <p>9867503256</p>
                        <p>24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default NavThird;