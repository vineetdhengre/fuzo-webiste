import { React } from "react"
import "./style.css"
import MainSlider from "../../Components/Slider/MainSlider/MainSlider"
import { Card } from "@mui/material"
import ProductShowcase from "../../Components/ProductShowCase/ProductShowCase"
import NewArrivals from "../../Components/NewArrivals/NewArrival"
import Footer from "../../Components/Footer/Footer"

function Home() {
    return (
        <>
            <div>
                <MainSlider />
            </div>

            <div className="main-body">
                <div className="container hero-section">
                    <div className="body-customHeading">
                        <h2 style={{ fontSize: "3rem" }} >
                            Ready in Moments <br />
                            <span className="highlight-text" style={{ fontSize: "3.4rem" }} >LOVED FOREVER </span>
                        </h2>
                    </div>
                    <div className="row align-items-center mt-1" >

                        <div className="col-md-3" >
                            <div className="feature">
                                <span className="feature-icon">🔥</span>
                                <div>
                                    <h4 className="fw-bold">High in Richness</h4>
                                    <p><b>Fuzo</b> is a nutrition powerhouse, packed with antioxidants, micro, and macronutrients.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">🥗</span>
                                <div>
                                    <h4 className="fw-bold">Healthy Flavors</h4>
                                    <p><b>Fuzo</b> offers delightful sides of healthy living. Our meals prove that nutritional food can also be really tasty.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 image-container">
                            <img src="assets\image-three.png" alt="Farm Fresh" />
                        </div>

                        <div className="col-md-3" >
                            <div className="feature">
                                <span className="feature-icon">😋</span>
                                <div>
                                    <h4 className="fw-bold">Love in Every Bite</h4>
                                    <p>Our intricate recipes also make <b>Fuzo</b> special. We believe in the details & excellent things take time.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">🍯</span>
                                <div>
                                    <h4 className="fw-bold">Un-refined Goodness</h4>
                                    <p>Each bite of <b>Fuzo</b> releases the Kraft of nature. We use raw materials free of additives, so trust their purity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ProductShowcase />
                </div>


                <div className="container-fluid text-center mt-2" style={{ padding: "0 4rem" }} >
                    <div className='info-container'>
                        <div style={{ textAlign: "left", width: "65%" }}>
                            <span className="badge-custom">Fresh Delight</span>
                            <h4 className="mt-3 " style={{ fontSize: "2.8rem ", fontWeight: 700 }}>
                                FRESH SUPPLIES <span className="highlight-text">ASSURE</span> SUPERIOR MEALS
                            </h4>
                        </div>

                        <div className="icon-box mt-3 justify-content-center" style={{ textAlign: "left", width: "35%" }}>
                            <img src="assets\icons\boiling.png" alt="" />
                            <p><b>FUZO</b> offers essential nutrients from 30 major ingredients, including avocado, sesame, capsicum, vegetables, and fruits.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <NewArrivals limit={4}/>
                </div>

                {/* video banner section */}
                <div>
                    <div className="container-fluid mt-4 pt-3">
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
            </div>
        </>
    )
}

export default Home
