import React from 'react'
import { useState, useEffect } from 'react';
import './ComingSoon/CsStyle.css';

export default function About() {
  return (
    <>
      <div>
        <div className="container-fluid hero-section">

          <img src="assets/about_us.png" alt="" srcset="" style={{ width: "100%", height: "auto" }} />

        </div>
        <div className="container mt-5">
          <p className="text-center mt-3" style={{ fontSize: "1.2rem" }}>
            Sajj Impex was founded in the year 2016 by Shruti Sharma an investment banking MBA and Ajay Sharma who has 25 years of experience in the food distribution industry.
          </p>
          <p className="text-center mt-3" style={{ fontSize: "1.2rem" }}>
            Fuzo was born after the two founders saw that the market was looking for healthy and tasty premium snacks. After working in the HORECA segment with IDIKA, they entered the retail space with Fuzo in February 2025, starting with healthy and tasty premixes and preparing more products like healthy chips, puffs and other items that are coming soon.
          </p>
        </div>
      </div>
    </>
  )
}
