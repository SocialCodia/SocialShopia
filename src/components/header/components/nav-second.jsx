
const NavSecond = () => {

    return (
        <div className="navSecond border-bottom bg-white">
            <div className="ccontainer">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-l3 col-sm-2 col-2 logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
                    </div>
                    <div className="col-lg-6 col md-4 searchBox d-none d-lg-block">
                        <div className="form-group">
                            <input type="text" name="search" id="search" className="form-control" placeholder="Search for products..." />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4 searchBox d-flex  justify-content-around">
                        <div className="navAction d-flex align-middle">
                            <img src="../../sources/images/icons/icon-heart.svg" alt="" />
                            <p className="d-none d-lg-block">Wishlist</p>
                        </div>
                        <div className="navAction d-flex align-middle">
                            <img src="../../sources/images/icons/icon-cart.svg" alt="" />
                            <p className="d-none d-lg-block">Cart</p>
                        </div>
                        <div className="navAction d-flex align-middle">
                            <img src="../../sources/images/icons/icon-user.svg" alt="" />
                            <p className="d-none d-lg-block">Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default NavSecond;