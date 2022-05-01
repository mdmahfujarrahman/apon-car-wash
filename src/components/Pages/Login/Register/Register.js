import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { async } from "@firebase/util";
import Loading from "../../Shared/Loading/Loading";


const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [agree , setAgree] = useState(false)
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updareError] = useUpdateProfile(auth);


    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        
        await createUserWithEmailAndPassword(email, password, name);
        await updateProfile({ displayName: name });
        
        navigate("/home");
         
    };


    if (loading || updating) {
        return <Loading />;
    }

    const navigateLogin = (e) => {
        navigate("/login");
    };
    return (
        <div className="container w-50 mx-auto">
            <h1 className="text-primary text-center mt-2">Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        ref={nameRef}
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={() => setAgree(!agree)}
                        className={`${agree ? "" : "text-danger"}`}
                        label="Accept Apon car Terms and Conditions"
                    />
                </Form.Group>
                <Button
                    disabled={!agree}
                    className="container mx-auto"
                    variant="primary"
                    type="submit"
                >
                    Register
                </Button>
            </Form>
            <p>
                Already have an Account?
                <Link
                    to={"/login"}
                    className="text-danger ml-2 pe-auto text-decoration-none"
                    onClick={navigateLogin}
                >
                    Please login
                </Link>
            </p>
            <SocialLogin />
           
        </div>
    );
};

export default Register;
