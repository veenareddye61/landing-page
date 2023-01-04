
import './home.css';
import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container>
    <div id='Home'>
        <h1 className='heading1'>GlobalLogic is Your Partner in</h1> <h1 className='heading1'>Building the Exceptional</h1>
        <div className='workspace'><img className='wrkimg' src='https://img.freepik.com/premium-vector/illustration-office-room-with-tables-shelves-computers_180264-183.jpg?w=2000'></img></div>
    </div>
    </Container>
  )
}
