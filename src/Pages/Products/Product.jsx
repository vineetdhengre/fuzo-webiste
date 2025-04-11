import React from "react"
import "./product.css"


export default function Product() {

    const products = [
        { title: "Idli Mix", image: "/assets/idli_mix_one.png" },
        { title: "Moong Dal Mix", image: "/assets/moong_dal_one.png" },
        { title: "Multi Millet Dosa", image: "/assets/multi_millet_dosa_one.png" },
        { title: "MultiGrain Dosa Calcium", image: "/assets/multigrain_dhokla_calcium_one.png" },
        { title: "MultiGrain Dosa Protein", image: "/assets/multigrain_dhokla_protien_one.png" },
        { title: "Oats Idli Mix", image: "/assets/oats_idli_mix_one.png" }
    ];

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

                <div className="container my-5">
                    <div className="row justify-content-center">
                        {products.map((product, index) => (
                            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                                <div className="card shadow-lg border-0 rounded-lg text-center">
                                    <div className="plan-header">{product.title}</div>
                                    <div className="card-body p-4">
                                        <img src={product.image} alt={product.title} className="product-image" />
                                        <button className="btn buy-now">BUY NOW</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>




            </div>

        </>

    )
}