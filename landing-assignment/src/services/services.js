import './services.css';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

export default function Services() {
  return (
    <Container>
        <div id='Services'>
        <h2>Our Services</h2>
    <div className='services'>
        <div className='subservice'>
            <p className='sp1'>Labs</p>
            <p className='sp2'>At solmen necessi a uniform grammatica pronunciation sommun plu paroles ma quande.</p>
            <p className='spm'>+ More</p>
        </div>
        <div className='subservice'>
            <p className='sp1'>Software Engineering</p>
            <p className='sp2'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur</p>
            <p className='spm'>+ More</p>
        </div>
        <div className='subservice'>
            <p className='sp1'>Cloud Adoption</p>
            <p className='sp2'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur</p>
            <p className='spm'>+ More</p>
        </div>
    </div>
    </div>
    </Container>
  )
}
