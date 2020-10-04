import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [nameState, nameStateSet] = useState({name: ''});
    const [emailState, emailStateSet] = useState({email: ''});
    const [messageState, messageStateSet] = useState({message: ''});
    const [errorState, errorStateSet] = useState({error: undefined});
    const [succesState, succesStateSet] = useState({success: false});
    const [validationState, validationStateSet] = useState({ validation: undefined });



    // setting the name state on user entering the name.
    const nameChangeHandler = (event) => {
        if (errorState.error || succesState.success || validationState.validation) {
            if (errorState.error) {
                errorStateSet({
                    error: undefined
                });
            }
            
            if (succesState.success) {
                succesStateSet({
                    success: false
                })
            }

            if(validationState.validation) {
                validationStateSet({
                    validation: undefined
                })
            }

        }

        nameStateSet({
            name: event.target.value
        });
    }

    // setting the email state on user entering the email.
    const emailChangeHandler = (event) => {
        if (errorState.error || succesState.success || validationState.validation) {
            if (errorState.error) {
                errorStateSet({
                    error: undefined
                });
            }
            
            if (succesState.success) {
                succesStateSet({
                    success: false
                })
            }

            if(validationState.validation) {
                validationStateSet({
                    validation: undefined
                })
            }
        }
        emailStateSet({
            email: event.target.value
        });
    }

    // setting the message state on user entering the message.
    const messageChangeHandler = (event) => {
        if (errorState.error || succesState.success || validationState.validation) {
            if (errorState.error) {
                errorStateSet({
                    error: undefined
                });
            }
            
            if (succesState.success) {
                succesStateSet({
                    success: false
                })
            }

            if(validationState.validation) {
                validationStateSet({
                    validation: undefined
                })
            }
        }
        messageStateSet({
            message: event.target.value
        });
    }

    // method fires when user clicks the submit button on the contact page
    // right now it is only making a post api call to fake api backend. later a real dedicated api endpoint will be used.
    const submitHandler = (event) => {
        // Testing the post api call.
        // const numTest = /[^0-9]/g;
        if (nameState.name.length < 1 || /[0-9]/g.test(nameState.name)) {
            validationStateSet({
                validation: 'Invalid Name'
            })
            return;
        }

        if (emailState.email.length <= 4 || !/@{1,}/g.test(emailState.email)) {
            validationStateSet({
                validation: 'Invalid Email'
            })
            return;
        }

        if ( messageState.message.length < 1 ) {
            validationStateSet({
                validation: 'Enter a message!'
            })
            return;
        }

        if (!validationState.validation) {

            fetch('https://portfolio-4752e.firebaseio.com/messages.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameState.name,
                    email: emailState.email,
                    message: messageState.message
                })
            }).then((response) => {
                nameStateSet({
                    name: ''
                });
                emailStateSet({
                    email: ''
                });
                messageStateSet({
                    message: ''
                })
                return response.json();
            }).then((resData) => {
                if (resData) {
                    succesStateSet({
                        success: true
                    })
                }
            }).catch(err => {
                if (err) {
                    errorStateSet({
                        error: err
                    })
                }
            });
        }

   
    }

    return(
        <div className="contact-container">
            {errorState.error ? <p className='error'>Error Occurred. Try Again</p> : null}
            {succesState.success ? <p className='success'>Message sent</p> : null }
            {validationState.validation ? <p className='error'>{validationState.validation}</p> : null}
            <h2>Message Me</h2>
            <div className='contact-form-container' id='form-container'>
                <input name='Name' type="text" placeholder='Name' value={nameState.name} onChange={nameChangeHandler} required/>
                <br/>
                <input name='email' type="email" placeholder='Email' value={emailState.email} onChange={emailChangeHandler} required/>
                <br/>
                <textarea name='message' value={messageState.message} placeholder='Message' onChange={messageChangeHandler} required/>
                <br/>
                <button onClick={submitHandler} >Submit</button>
            </div>
            <h1>OR</h1>
            <h3 className="contact-text">Drop an email at <span className='emailAdd'>vipul.singh77@gmail.com</span></h3>
        </div>
    )
}

export default Contact;