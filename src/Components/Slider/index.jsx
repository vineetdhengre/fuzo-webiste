import React from 'react'
import "./style.css";

function Slider() {
    return (
        <>
            <div className="container text-center mt-5">

                <div className='info-container'>

                    <div style={{ textAlign: "left", width: "60%" }}>
                        <span className="badge-custom">Fresh Delight</span>
                        <h4 className="mt-3 " style={{fontSize: "2.8rem ", fontWeight: 700}}>
                            FRESH SUPPLIES <span className="highlight-text">ASSURE</span> SUPERIOR MEALS
                        </h4>

                    </div>

                    <div className="icon-box mt-3 justify-content-center" style={{ textAlign: "left", width: "40%" }}>
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
                                        <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Onion" />
                                        <h5 className="mt-2">Onion</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/766/766173.png" alt="Avocado" />
                                        <h5 className="mt-2">Avocado</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/415/415734.png" alt="Carrot" />
                                        <h5 className="mt-2">Carrot</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2545/2545426.png" alt="Mushroom" />
                                        <h5 className="mt-2">Mushroom</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 slider-item">
                                    <div className="card">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2909/2909675.png" alt="Maize" />
                                        <h5 className="mt-2">Maize</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
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
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#vegCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#vegCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>

            <div>
                <div className="container-fluid ">
                <img src="assets\bowl-test.png" alt="Bowl" class="bowl-top-left" />
                    <div className="hero-section-bottom">
                        <div className="tag">Fresh Choices</div>
                        <h1 className="title">Meet the high nutrition plates.</h1>
                        <p className="subtitle">Experience our crunchy greens, ripe veggies.<br/>A burst of flavour in every bite!</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-custom btn-orange">ORDER FUZO →</button>
                            <button className="btn btn-custom btn-outline">FIND OUR SHOPS →</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider