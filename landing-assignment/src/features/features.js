import './features.css';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

export default function Features() {
  return (
    <Container>
        <div id='Features'>
        <h2>Our Features</h2>
        <p className='ftxt'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur.</p>
    <div className='favdiv'>
        <div className='favdiv1'></div>
        <div className='favdiv2'>
            <div className='fdiv'>
                <p className='fp1'>Works With Existing</p>
                <p className='fp2'>Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus ultrices
posuere cubilia.</p>
                <p className='fp3'>+ More</p>
            </div>
            <div className='fdiv'>
                <p className='fp1'>Easy Emailing</p>
                <p className='fp2'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur.</p>
                <p className='fp3'>+ More</p>
            </div>
            <div className='fdiv'>
                <p className='fp1'>Get Private Feedback</p>
                <p className='fp2'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur.</p>
                <p className='fp3'>+ More</p>
            </div>
        </div>
        </div>
    </div>
    </Container>
  )
}
