import { Link } from "react-router-dom";

const BigCard = ({ title, more = false, children }) => {

    return (
        <div className="card mt-3 bigCard  border-0 bg-white">
            <div className="card-header d-flex justify-content-between bg-white" >
                <h4>{title}</h4>
                {
                    more && <Link to='/'>
                        <div className="btn btn-danger">
                            View More
                        </div>
                    </Link>
                }
            </div>
            <div className="card-body  bg-white">
                {children}
            </div>
        </div>
    )

}

export default BigCard;