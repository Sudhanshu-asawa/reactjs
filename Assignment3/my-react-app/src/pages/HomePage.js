import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../Component/view';
import "./css/Home.css"

const Home =() => {

    return (
        <>
            <div className={'container'}>
                <h1>Contacts</h1>
                <Contacts />
                <Link to="/NewContact">
                <button className='btn block-cube block-cube-hover' >
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
                        Create Contact
                    </div>
                </button>
                </Link>
            </div>
        </>
    )
}

export default Home;