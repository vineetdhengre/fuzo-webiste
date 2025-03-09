import { React } from "react"
import "./index.css"
import Slider from "../../Components/Slider"

function Home() {
    return (
        <>
            <div className="main-body">
                <section className="container-fluid food-section">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-center">
                            <img src="assets\image-one.jpg" className="food-image" alt="Delicious Platter" />
                        </div>

                        <div className="col-md-6 text-left position-relative">
                            <div className="image-container">
                                <img src="assets/image-two.jpg" className="food-image img-fluid" alt="Delicious Platter" />
                                <div className="overlay-text">
                                    <h2 className="font-weight-bold custom-font" style={{ fontSize: "4rem" }} >FUEL UP YOUR DAY WITH OUR PLATTER!</h2>
                                    <a href="#" className="order-btn mt-3 d-inline-block fs-4">ORDER FUZO →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="container hero-section">

                    <div className="body-customHeading">
                        <h2 style={{ fontSize: "4rem" }} >
                            NURTURE THE BODY WITH <br />
                            <span className="highlight-text" style={{ fontSize: "4rem" }} >FARM-FRESH VEGETABLES</span>
                        </h2>
                    </div>

                    <div className="row align-items-center mt-4" >

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

                <Slider/>


            </div>

        </>
    )
}

export default Home
