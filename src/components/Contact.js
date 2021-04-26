
import AnimOnView from "./anim/AnimOnView";
import { useEffect, useState } from "react"
import ToastContainer from "./Toast";

require('dotenv').config();

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ toast, setToast ] = useState('');


    const submitForm = async (e) => {
        
        e.preventDefault();
        e.target.reset();

        const res = await fetch(`${process.env.REACT_APP_API_URL}/message`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        setToast('Thank you!')

    }

    useEffect(() => {
        if(toast !== '') {
            setTimeout(() => {
                setToast('');
            }, 5000)
        } 
    }, [toast])

    return(
        <div className='Contact full-screen align-center'>
            {/* <ToastContainer string={toast} /> */}
            <AnimOnView>
                <h2>Contact Me</h2>
                <form className='contact-form' onSubmit={submitForm}>
                    <span className='horizontal small-gap align-center'> 
                        <span className='vertical'>
                            <label >Name</label>
                            <input onChange={(e) => {setName(e.target.value)}} className='contact-input contact align-center' type='text' />
                        </span>
                        <span className='vertical'>
                            <label>Email</label>
                            <input onChange={(e) => {setEmail(e.target.value)}} className='contact-input contact align-center' type='email' ></input>
                        </span>
                    </span>
                    <span className='contact-textarea-container'>
                        <label>How Can I Help?</label>
                        <textarea onChange={(e) => {setMessage(e.target.value)}} className='contact-textarea contact align-center' ></textarea>
                    </span>
                    <button className='contact contact-button' type='submit'> Submit </button>
                </form>
            </AnimOnView>
        </div>
    );
}

export default Contact;