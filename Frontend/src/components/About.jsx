import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='banner'>
                    <div className='top'>
                        <h1 className='heading'>ABOUT US</h1>
                        <p>The only thing we're serious about is Food</p>
                    </div>
                    <p className='mid'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fuga aliquam officiis dolorum voluptates dignissimos laboriosam nisi distinctio laudantium autem, dolorem corrupti blanditiis adipisci voluptate, sapiente asperiores id! Atque, sed!
                    </p>
                    <Link to={"/"}>Explore Menu<span>
                        <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
                    </span>
                    </Link>
                </div>
                <div className='banner'>
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About