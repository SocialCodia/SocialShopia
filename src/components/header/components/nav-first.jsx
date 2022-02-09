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
                <ul className="d-flex list-unstyled rightUl d-lg-block">
                    <li><Link to="/">Need help? Call Us: <strong>+91 9867503256</strong> </Link></li>
                    <li><Link to="/">Login / Register</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavFirst;