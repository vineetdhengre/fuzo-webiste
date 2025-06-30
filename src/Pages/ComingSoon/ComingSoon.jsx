import React, { useState, useEffect } from 'react';
import './CsStyle.css';


export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);

    const launchDate = new Date('July 5, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: 'Days', delay: 0 },
    { value: timeLeft.hours, label: 'Hours', delay: 200 },
    { value: timeLeft.minutes, label: 'Minutes', delay: 400 },
    { value: timeLeft.seconds, label: 'Seconds', delay: 600 }
  ];

  const socialIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];

  return (
    <div className="coming-soon-container">
      <div className="container coming-soon">
        <div className="row justify-content-center">
          <div className={`col-lg-8 text-center content-box ${isLoaded ? 'show' : ''}`}>
            <h1 className="animate__animated animate__fadeInDown">COMING SOON</h1>
            <p className="lead animate__animated animate__fadeIn animate__delay-1s">
              We’re cooking up something fresh, flavorful, and unforgettable! From farm-fresh ingredients to ready-to-eat delights, our food marketplace is almost ready to serve you the best bites at your doorstep.
            </p>

            <div className="countdown d-flex justify-content-center">
              {countdownItems.map((item, i) => (
                <div
                  key={i}
                  className={`countdown-item ${isLoaded ? 'show' : ''}`}
                  style={{ transitionDelay: `${1000 + item.delay}ms` }}
                >
                  <div className="count-number">{item.value ?? '00'}</div>
                  <div className="count-text">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="social-icons my-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={icon}
                  href="#"
                  className={isLoaded ? 'show' : ''}
                  style={{ transitionDelay: `${1500 + i * 200}ms` }}
                >
                  <i className={`fab fa-${icon}`}></i>
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
  );
}
