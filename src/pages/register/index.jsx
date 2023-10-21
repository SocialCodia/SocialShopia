import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { doRegister } from "../../http";

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const inputEvent = (e) => {
        setFormData((old) => {
            const { name, value } = e.target;
            return {
                ...old,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;
        if (!name) return toast.error('Enter Name');
        if (!email) return toast.error('Enter Email');
        if (!password) return toast.error('Enter Password');
        setLoading(true);
        const res = await doRegister(formData);
        setLoading(false);
        if (res.success)
            toast.success(res.message);
    }

    return (
        <>
            <Header />
            <div className="ccontainer mt-5 mb-5 row">
                <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center mb-5">Register an account</h5>
                            <form action="" method="post" onSubmit={onSubmit}>
                                <div className="form-group m-3">
                                    <input type="text" className="form-control" readOnly={loading} onChange={inputEvent} value={formData.name} name="name" id="name" placeholder="Name" />
                                </div>
                                <div className="form-group m-3">
                                    <input type="email" readOnly={loading} value={formData.email} onChange={inputEvent} className="form-control" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group m-3">
                                    <input type="password" readOnly={loading} value={formData.password} onChange={inputEvent} className="form-control" name="password" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group m-3">
                                    <button className="btn btn-primary w-100" disabled={loading} type="submit">Register</button>
                                </div>
                                <div className="orlogin d-flex justify-content-between">
                                    <span className="border-top w-100  p-0 m-0"></span>
                                    <p className="w-100 text-center">Or Login With</p>
                                    <span className="border-top w-100"></span>
                                </div>
                                <div className="social-login d-flex justify-content-center">
                                    <div className="facebook p-2">
                                        <img className="circle bg-danger " src="../../../../sources/images/icons/icon-facebook-white.svg" alt="" />
                                    </div>
                                    <div className="google p-2">
                                        <img className="circle bg-danger" src="../../../../sources/images/icons/icon-facebook-white.svg" alt="" />
                                    </div>
                                </div>
                                <div className=" justify-content-center d-flex">
                                    <p>Already have an account? </p>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default RegisterPage;