import React from 'react';
import google from '../../images/logo/google.png'
import facebook from '../../images/logo/facebook.png'
import { Link } from 'react-router-dom';
const SingUp = () => {
    return (
        <div>
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded w-25">
                <form>
                    <h4 className="text-center fst-italic fw-bold">SIgnUp</h4>
                    <div class="mb-3">
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-dark py-1 px-5">SignUp</button>
                </form>
                <h5 className='text-center mt-4'> ------ Or Singup with------ </h5>
                <div className='login-btn'>
                    <button className="btn"><img src={google} alt="" /></button>
                    <button className="btn"><img src={facebook} alt="" /></button>
                </div>
                <h6>Already Registered ?
                    <Link to='login'> Login</Link>
                </h6>
            </div>
        </div>
    );
};

export default SingUp;