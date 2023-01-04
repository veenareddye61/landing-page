import './about.css';
import React from 'react';
import Container from 'react-bootstrap/Container';

export default function About() {
  return (
    <Container>
        <div id='About'>
        <h2>About US</h2>
    <div>
        <div className='abt1'>GlobalLogic, a Hitachi Group Company, is a leader in digital product engineering. We help our
clients design and build innovative products, platforms, and digital experiences for the modern
world. By integrating our strategic design, complex engineering, and vertical industry expertise
with Hitachi’s Operating Technology and Information Technology capabilities, we help our
clients imagine what’s possible and accelerate their transition into tomorrow’s digital businesses.
Headquartered in Silicon Valley, GlobalLogic operates design studios and engineering centers
around the world, extending our deep expertise to customers in the automotive, communications,
financial services, healthcare & life sciences, media and entertainment, manufacturing,
semiconductor, and technology industries.</div>
        <div className='abt2'>
            <div className='subAbt'>
                <p className='p1'>DEVELOPMENT</p>
                <p className='ph'>Product Development</p>
                <p className='p2'>Suspendisse lobortis dolor sapien, in malesuada felis venenatis sed. Nullam interdum, nunc et
commodo elementum, quam nisl vestibulum metus, eu accumsan sem mi sit amet mi.</p>
            </div>
            <div className='subAbt'>
            <p className='p1'>DEVELOPMENT</p>
                <p className='ph'>Engineering</p>
                <p className='p2'>Proin nisi nulla, imperdiet ut eros et, condimentum pulvinar risus. Mauris in neque et purus
euismod hendrerit vel id libero. Phasellus ut euismod orci, sed dignissim risus.</p>
            </div>
            <div className='subAbt'>
            <p className='p1'>MARKETING</p>
                <p className='ph'>Marketing Product</p>
                <p className='p2'>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi
commodi consequatur.</p>
            </div>
        </div>
    </div>
    </div>
    </Container>
  )
}
