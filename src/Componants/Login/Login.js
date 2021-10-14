import React from 'react';
import google from '../../images/logo/google.png'
import facebook from '../../images/logo/facebook.png'
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { googleSignIn, facebookSignIn } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const loginGoogle = () => {
        googleSignIn()
            .then(result => {
                history.push(location.state?.from)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const loginFacebook = () => {
        facebookSignIn()
            .then(result => {
                history.push(location.state?.from)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded w-25 login-container">
                <form>
                    <h4 className="text-center fst-italic fw-bold">Login</h4>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-dark py-1 px-5">Login</button>
                </form>
                <h6 className='text-center mt-4'> ------ Or login with------ </h6>
                <div className='login-btn'>
                    <button onClick={loginGoogle} className="btn"><img src={google} alt="" /></button>
                    <button onClick={loginFacebook} className="btn"><img src={facebook} alt="" /></button>
                </div>
                <h6>Don't have account ?
                    <Link to="/signup"> SingUp</Link>
                </h6>
            </div>
        </div>
    );
};

export default Login;