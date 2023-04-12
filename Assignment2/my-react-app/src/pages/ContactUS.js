import React from 'react';
import './Contactus.css';
import axios from 'axios';
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')

    // const handleInputChange = (e) => {
    //     const {name, value} = e.target;
    //     let isValid = true;
    //
    //     if (name === 'name') {
    //         // validate name input
    //         const regex = /^[a-zA-Z\s]*$/;
    //         isValid = regex.test(value);
    //         setName(value);
    //     } else if (name === 'email') {
    //         setEmail(value);
    //     } else if (name === 'address') {
    //         // validate address input
    //         const regex = /^[a-zA-Z0-9\s,'-]*$/;
    //         isValid = regex.test(value);
    //         setAddress(value);
    //     } else if (name === 'city') {
    //         // validate city input
    //         const regex = /^[a-zA-Z\s]*$/;
    //         isValid = regex.test(value);
    //         setCity(value);
    //     } else if (name === 'state') {
    //         // validate state input
    //         const regex = /^[a-zA-Z\s]*$/;
    //         isValid = regex.test(value);
    //         setState(value);
    //     } else if (name === 'zip') {
    //         setZip(value);
    //     }
    //
    //     if (!isValid) {
    //         alert(`Invalid ${name} input`);
    //     }
    // };
    //
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert("Address Added Successfully")
    //     window.location.href = "Payment/";
    // };
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');

        const formData = new FormData(e.target);
        axios.post('http://localhost/reactjs/Assignment2/Php/saveForm.php', formData)
            .then((response) => {
                if (response.status === 200) {
                    setFormStatus('Submitted');
                } else {
                    setFormStatus('Error');
                }
            })
            .catch((error) => {
                console.error(error);
                setFormStatus('Error');
            });


        axios.post('http://localhost/reactjs/Assignment2/Php/sendEmail.php', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <body className="billingpage">
        <div>
            <img className="contact" src="/images/demo.jpg"/>
        </div>
        <form onSubmit={onSubmit} className="form-container">
            <h2>Contact Us</h2>
            <fieldset>
                <label>
                    Name:
                    <input type="text" name="name"  required/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email"   required/>
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone"   required/>
                </label>
                <label>
                    Message
                    <input type="text" name="message"  required/>
                </label>

                <button  type="submit">Submit </button>
            </fieldset>
        </form>
        </body>

    );
};

export default ContactForm;