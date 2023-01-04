import './contact.css';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

export default function Contact() {
  return (
    <Container>
        <div id='Contact'>
     <h2>Contact Us</h2>
        <p className='ctxt'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur.</p>
    <div className='favdiv'>
        <div className='favdiv1'></div>
        <div className='favdiv2'>
            <h3>Get In touch</h3>
            <div className='contactdiv'>
                <div className='name'>
                <div>
                    <p className='text'>First Name</p>
                    <input className='itext' typeof='text' placeholder='Enter Text...'></input>
                </div>
                <div>
                    <p className='text'>Last Name</p>
                    <input className='itext' typeof='text' placeholder='Enter Text...'></input>
                </div>
                </div>
                <p className='text'>Enter Email</p>
                <input className='itext' typeof='email' placeholder='Enter Email'></input>
                <p className='text'>Teaxt Message</p>
                <textarea className='tarea'></textarea>
                <button className='sbtn'>Submit</button>
            </div>
        </div>
    </div>
    </div>
    </Container>
  )
}
