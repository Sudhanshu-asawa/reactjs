import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


import {auth} from "../firebase";
import './css/signup.css'

function Login() {

    const navigate = useNavigate(); //navigation
    const [values, setValues] = useState({
        email: "",
        pass: ""
    });

    const [errorMsg, setErrorMsg] = useState(""); //storing error messages
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = (event) => {
        event.preventDefault();
        const valid = validationForm();

        if (valid) {
            setErrorMsg("");

            setSubmitButtonDisabled(true);

            signInWithEmailAndPassword(auth, values.email, values.pass ,values.name)
                .then(async (res) => {
                    setSubmitButtonDisabled(false);
                    navigate("/HomePage");
                })
                .catch((err) => {
                    setSubmitButtonDisabled(false);
                    setErrorMsg(err.message);
                    alert(err.message);
                });
        } else {
            console.log(errorMsg);
        }
    };

    const validationForm = () => {

        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return false;
        }
        return true;
    }


    return(
        <form id="form"  name="form" className='form'>
            <div className='control'>
                <h1>
                    Login
                </h1>
            </div>
            <div className='control block-cube block-input'>
                <input name='email' id="email" required placeholder='EMail' type='email' onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                } />
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
            </div>
            <div className='control block-cube block-input'>
                <input name='pass' id="pass" required placeholder='Password' type='password' onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                }/>
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
            </div>
            <button type={"submit"} onClick={handleSubmission} className='btn block-cube block-cube-hover' disabled={submitButtonDisabled} >
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
                <div className='text'>
                    Login
                </div>
            </button>


        </form>
    )
}

export default Login;


















