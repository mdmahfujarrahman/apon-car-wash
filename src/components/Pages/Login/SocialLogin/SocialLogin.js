import React from 'react';
import google from '../../../../images/Google.png'
import facebook from '../../../../images/Facebook.png'
import github from '../../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    
    if (loading || loading1){
        return <Loading/>
    }
        if (error || error1) {
            errorElement = (
                <p className="text-danger">
                    Error: {error?.message} {error1?.message}
                </p>
            );
        }
    if (user || user1) {
        navigate("/home");
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div
                    style={{ height: "1px" }}
                    className="bg-primary w-50"
                ></div>
                <p className="mt-3 px-2">or</p>
                <div
                    style={{ height: "1px" }}
                    className="bg-primary w-50"
                ></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-info w-50 mx-auto d-block my-2"
                >
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className="px-2 text-white">Google Sign In</span>
                </button>
                <button className="btn btn-info w-50 mx-auto d-block my-2">
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className="px-2 text-white">Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-info w-50 mx-auto d-block my-2"
                >
                    <img style={{ width: "30px" }} src={github} alt="" />
                    <span className="px-2 text-white">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;