import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { toast } from "react-toastify";
import { doForgot } from "../../http";
import { useDispatch } from "react-redux";
import { setEmail } from '../../store/auth-slice';

const ForgotPassword = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: ''
    });

    const [loading, setLoading] = useState(false);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setFormData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { email } = formData;
        if (!email) return toast.error('Enter Email');

        setLoading(true);
        const res = await doForgot(formData);
        setLoading(false);
        if (res.success) {
            toast.success(res.message);
            dispatch(setEmail(formData.email));
        }

    }

    return (
        <>
            <Header />
            <div className="ccontainer mt-5 mb-5 row">
                <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center mb-5">Login into you account</h5>
                            <form action="" method="post" onSubmit={onSubmit}>
                                <div className="form-group m-3">
                                    <input type="email" onChange={inputEvent} readOnly={loading} value={formData.email} className="form-control" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group m-3">
                                    <button className={`btn btn-primary w-100 ${loading && 'disabled'}`} type="submit">Send OTP</button>
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
                                <div className="justify-content-center d-flex">
                                    <p>Dont have an account? </p>
                                    <Link to="/register">
                                        Register
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

export default ForgotPassword;