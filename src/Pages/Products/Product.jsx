import React from "react"
import "./product.css"
import NewArrivals from "../../Components/NewArrivals/NewArrival";


export default function Product() {

    return (
        <>
            <div>
                <section className="product-hero-section d-flex align-items-center text-center text-md-center position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="hero-title"> Finger Lickin Food by Premixes</h1>
                                <p className="hero-subtitle">
                                    Out with the old, in with the new! Your trash is another's treasure.
                                    Start making money, or find great deals today!
                                </p>
                                <div className="hero-buttons">
                                    <button className="btn btn-success btn-lg me-3">Start Selling</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>

                    {/* Wave Effect */}
                    <div className="wave-container">
                        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="wave">
                            <path
                                fill="#f8f9fa"
                                d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,138.7C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96V320H0Z"
                            ></path>
                        </svg>
                    </div>
                </section>

                <div>
                    <NewArrivals limit={6} isProductPage /> ;
                </div>
            </div>

        </>


    )
}