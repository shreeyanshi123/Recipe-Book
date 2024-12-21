import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

export const Success = () => {

    const [countdown,setCoundown]=useState(10);
    const navigate=useNavigate();

    useEffect(()=>{
        const timeoutId=setInterval(()=>{
            setCoundown((preCount)=>{
                if(preCount==1){
                    clearInterval(timeoutId);
                    navigate("/")
                }
                return preCount-1;
            });
        },1000);

        return ()=>clearInterval(timeoutId);
    },[navigate]);




  return (
    <section className='notFound'>
        <div className="container">
            <img src="/sandwich.png" alt="success"/>
            <h1>Redirecting to Home in {countdown} seconds...</h1>
            <Link to={'/'}>Back to Home<HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight> </Link>
        </div>
    </section>
  )
}
