import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'


import {auth} from "../firebase";
import './css/signup.css'

function SignUp() {
    const navigate = useNavigate(); //navigation
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = (event) => {
        console.log(values);
        event.preventDefault();

        const valid = validationForm();

        if(valid) {

            setErrorMsg("");
            setSubmitButtonDisabled(true);

            createUserWithEmailAndPassword(auth, values.email, values.pass)
                .then(async (res) => {
                    //console.log(res);
                    setSubmitButtonDisabled(false);
                    const user = res.user;
                    await updateProfile(user, {
                        displayName: values.name,
                    });
                    navigate("/Login");
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
        let nameReg = /^[A-Za-z\s]+$/; //name valdiation regex
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }

        if (!nameReg.test(values.name)) {
            setErrorMsg('Name not valid !!!');
            return false;
        }

        return true;
    }



    return(
        <form id="form"  name="form" className='form'>
            <div className='control'>
                <h1>
                    Sign Up
                </h1>
            </div>

            <div className='control block-cube block-input'>
                <input name='name' id="name" required placeholder='Name' type='text' onChange={(event) => setValues((prev)=>({...prev, name: event.target.value}))}/>
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
                    Sign Up
                </div>
            </button>
            <Link to="/Login" className={"lnk"}>
                <p className={"lnk"}>Already a User : Login</p>
            </Link>

        </form>
    )
}

export default SignUp;


















