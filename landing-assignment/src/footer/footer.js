import './footer.css';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

export default function Footer() {
  return (
    <div className='fodiv'>
    <Container>
    <div className='footerdiv'>
        <div className='f1'><p>Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus ultrices
posuere cubilia.</p></div>
        <div className='f2'>
        <div className='fclass'>
            <p className='fh'>CUSTOMER</p>
            <p className='f1'>WORK</p>
            <p className='f1'>STRATEGY</p>
            <p className='f1'>PRESS</p></div>
        <div className='fclass'>
        <p className='fh'>PRODUCT</p>
            <p className='f1'>TRENDING</p>
            <p className='f1'>POPULAR</p>
            <p className='f1'>CUSTOMER</p>
        </div>
        <div className='fclass'>
        <p className='fh'>LEARN MORE</p>
            <p className='f1'>DEVELOPER</p>
            <p className='f1'>SUPPORT</p>
            <p className='f1'>GUIDE</p>
        </div>
        </div>
    </div>
    </Container>
    </div>
  )
}
