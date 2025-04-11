import React from 'react'
import "../App.css";
import videoBg from "/assets/thankyou.mp4";

export default function Thankyou() {
    return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center '>
                    <div className="thankyou-container">
                        <video autoPlay loop muted className="background-video">
                            <source src={videoBg} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="thankyou-content">
                            <h1 className="thankyou">Thank You</h1>
                            <h2 className="thankyou">Your Order has been Placed Successfully</h2>
                            <p className="thankyou">We will get back to you shortly</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}
