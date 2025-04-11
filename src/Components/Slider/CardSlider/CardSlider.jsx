import React, { useContext } from 'react';
import './card_slider.css';
import { useState, useCallback } from 'react';
import { useProductContext  } from '/src/Context/productContext';

export default function CardSlider() {

    const {myName} = useProductContext();
    console.log(myName)

    return (
        <>
            <div className="container-fluid text-center mt-5" style={{padding : "0 4rem"}} > 

                <div className='info-container'>

                    <div style={{ textAlign: "left", width: "65%" }}>
                        <span className="badge-custom">Fresh Delight</span>
                        <h4 className="mt-3 " style={{ fontSize: "2.8rem ", fontWeight: 700 }}>
                            FRESH SUPPLIES <span className="highlight-text">ASSURE</span> SUPERIOR MEALS
                        </h4>
                        <p> </p>

                    </div>

                    <div className="icon-box mt-3 justify-content-center" style={{ textAlign: "left", width: "35%" }}>
                        <img src="assets\icons\boiling.png" alt="" />
                        <p><b>FUZO</b> offers essential nutrients from 30 major ingredients, including avocado, sesame, capsicum, vegetables, and fruits.</p>
                    </div>

                </div>

                <div id="vegCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row justify-content-center">
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="assets\idli_mix_one.png" alt="Idli" />
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="assets\moong_dal_one.png" alt="Moong Dal" />

                                    </div>
                                </div>
                                {/* <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="assets\multi_millet_dosa_one.png" alt="Moong Dal" />

                                    </div>
                                </div> */}
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="assets\multigrain_dhokla_calcium_one.png" alt="Dhokla" />

                                    </div>
                                </div>
                                {/* <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="assets\multigrain_dhokla_protien_one.png" alt="Dhokla protein" />

                                    </div>
                                </div> */}
                                {/* <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="assets\oats_idli_mix_one.png" alt="Oats Idli" />

                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <div className="row justify-content-center">
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1119/1119077.png" alt="Broccoli" />
                                        <h5 className="mt-2">Broccoli</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2909/2909687.png" alt="Tomato" />
                                        <h5 className="mt-2">Tomato</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/415/415710.png" alt="Cucumber" />
                                        <h5 className="mt-2">Cucumber</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1607/1607613.png" alt="Pumpkin" />
                                        <h5 className="mt-2">Pumpkin</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2264/2264091.png" alt="Bell Pepper" />
                                        <h5 className="mt-2">Bell Pepper</h5>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#vegCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#vegCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button> */}
                </div>
            </div>

            <div>

                
            </div>

            <div>
                <div className="container-fluid mt-5 pt-5">
                    {/* <img src="assets\bowl-test.png" alt="Bowl" class="bowl-top-left" /> */}
                    <div className="hero-section-bottom">
                        <div className="tag">Fresh Choices</div>
                        <div className='gif-banner-section'>
                            <h1 className="card_title">Meet the high nutrition plates.</h1>
                            <p className="subtitle">Experience our crunchy greens, ripe veggies.<br />A burst of flavour in every bite!</p>

                        </div>
                        <div className="d-flex justify-content-center gap-3 pt-4 mt-2">
                            <button className="btn btn-custom btn-orange">ORDER FUZO →</button>
                            <button className="btn btn-custom btn-outline">FIND OUR SHOPS →</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
