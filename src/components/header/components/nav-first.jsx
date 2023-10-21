import { Link } from "react-router-dom";

const NavFirst = () => {
    return (
        <div className="headerFirst border-bottom bg-white">
            <div className="ccontainer d-flex justify-content-between">
                <ul className="d-flex list-unstyled leftUl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Order Tracking</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
                <ul className="w-100  list-unstyled rightUl d-sm-none d-none d-lg-block d-xl-block d-md-block d-flex text-end justify-content-between">
                    <span><Link to="/">Need help? Call Us: <strong>+91 9867503256</strong> </Link></span>
                    <span><Link to="/login">Login / Register</Link></span>
                </ul>
            </div>
        </div>
    )
}

export default NavFirst;