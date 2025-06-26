import React from 'react'
import { useState, useEffect } from 'react';
import './ComingSoon/CsStyle.css';

export default function About() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
  
    // Set the launch date (change this to your desired date)
    const launchDate = new Date('April 18, 2025 00:00:00').getTime();
  
    useEffect(() => {
      // Set isLoaded to true after a small delay to trigger animations
      setTimeout(() => {
        setIsLoaded(true);
      }, 300);
  
      // Update the countdown every second
      const interval = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the launch date
        const distance = launchDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update state
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        
        // If the countdown is finished, clear the interval
        if (distance < 0) {
          clearInterval(interval);
        }
      }, 1000);
      
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, [launchDate]);
  
    const socialIcons = [
      { icon: 'facebook', delay: 0, link: '#' },
      { icon: 'twitter', delay: 200, link: '#' },
      { icon: 'instagram', delay: 400, link: '#' },
      { icon: 'linkedin', delay: 600, link: '#' }
    ];
  
    const countdownItems = [
      { value: days, label: 'Days', delay: 0 },
      { value: hours, label: 'Hours', delay: 200 },
      { value: minutes, label: 'Minutes', delay: 400 },
      { value: seconds, label: 'Seconds', delay: 600 }
    ];
  
    const backgroundCircles = [
      { size: 200, top: '10%', left: '10%', delay: 0 },
      { size: 300, top: '60%', left: '70%', delay: 1 },
      { size: 150, top: '40%', left: '25%', delay: 2 },
      { size: 80, top: '70%', left: '10%', delay: 3 },
      { size: 250, top: '20%', left: '60%', delay: 4 }
    ];
  return (
    <>
    <div className="coming-soon-container">
      {/* Background Animation */}
      <div className="bg-animation">
        {backgroundCircles.map((circle, index) => (
          <div 
            key={index}
            className="circle"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: circle.top,
              left: circle.left,
              animationDelay: `${circle.delay}s`
            }}
          />
        ))}
      </div>

      <div className="container coming-soon">
        <div className="row justify-content-center">
          <div className={`col-lg-8 text-center content-box ${isLoaded ? 'show' : ''}`}>
            <h1 className="animate__animated animate__fadeInDown">COMING SOON</h1>
            <p className="lead animate__animated animate__fadeIn animate__delay-1s">
            We’re cooking up something fresh, flavorful, and unforgettable! From farm-fresh ingredients to ready-to-eat delights, our food marketplace is almost ready to serve you the best bites at your doorstep.
            </p>
            
            {/* Countdown Timer */}
            <div className="countdown d-flex justify-content-center">
              {countdownItems.map((item, index) => (
                <div 
                  key={index}
                  className={`countdown-item ${isLoaded ? 'show' : ''}`}
                  style={{ transitionDelay: `${1000 + item.delay}ms` }}
                >
                  <div className="count-number">{item.value}</div>
                  <div className="count-text">{item.label}</div>
                </div>
              ))}
            </div>
            
            {/* Subscribe Form */}
            {/* <div className="subscribe my-5">
              <p className="animate__animated animate__fadeIn animate__delay-2s">
                Sign up for updates!
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form className={`subscribe-form ${isLoaded ? 'show' : ''}`}>
                    <div className="input-group">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your email address"
                      />
                      <div className="input-group-append">
                        <button className="btn" type="button">Notify Me</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
            
            {/* Social Icons */}
            <div className="social-icons my-4">
              {socialIcons.map((icon, index) => (
                <a 
                  key={index}
                  href={icon.link}
                  className={isLoaded ? 'show' : ''}
                  style={{ transitionDelay: `${1500 + icon.delay}ms` }}
                >
                  <i className={`fab fa-${icon.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`footer ${isLoaded ? 'show' : ''}`}>
        <p>&copy; 2025 All Rights Reserved.</p>
      </div>
    </div>
    </>
  )
}
