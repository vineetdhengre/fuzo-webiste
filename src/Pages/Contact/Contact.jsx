import React from "react"
import { useForm, ValidationError } from '@formspree/react';
import Thankyou from "../Thankyou";
import "./contactStyle.css";


const Contact = () => {
  const [state, handleSubmit] = useForm("xvgkwqlw");
  if (state.succeeded) {
      return <Thankyou />;
  }

  return (

    <div>


<div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="contact-wrapper">
              <div className="row g-0">
                {/* Contact Info */}
                <div className="col-md-5">
                  <div className="contact-info h-100">
                    <h3 className="mb-4">Get in touch</h3>
                    <p className="mb-4">
                      We'd love to hear from you. Please fill out the form or contact us using the information below.
                    </p>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Address</h6>
                        <p className="mb-0">Shop No 123, Borivali, Maharashtra</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Phone</h6>
                        <p className="mb-0">+91-123456789</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Email</h6>
                        <p className="mb-0">care@fuzo.com</p>
                      </div>
                    </div>

                    <div className="social-links">
                      <h6 className="mb-3">Follow Us</h6>
                      <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-md-7">
                  <div className="contact-form">
                    <h3 className="mb-4">Send us a message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Username"  name="username" required autoComplete="off" />
                        </div>
                        <div className="col-md-6 mb-3">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Username"  name="username" required autoComplete="off" />
                        </div>
                      </div>

                      <div className="mb-3">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  name="email" required autoComplete="off" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>

                      <div className="mb-4">
                      <label for="exampleFormControlTextarea1">Enter your Message</label>
                      <textarea name="message" placeholder="Enter your Message" class="form-control" id="message" rows="3" required autoComplete="off"></textarea>
                      </div>

                      <button type="submit" className="btn btn-submit text-white">Submit</button>
                    </form>

                    <div className="map-container mt-4">
                    <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30137.288009003732!2d72.82510437278985!3d19.23181381921234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743607194404!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>

























      {/* /////////////////////////////////////////////////////////////// */}

      {/* <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30137.288009003732!2d72.82510437278985!3d19.23181381921234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128b333e163%3A0x985640540577af7e!2sBorivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743607194404!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div> */}

      {/* <div className="container" >
        <div className="row">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">User Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Username"  name="username" required autoComplete="off" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  name="email" required autoComplete="off" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Enter your Message</label>
                <textarea name="message" placeholder="Enter your Message" class="form-control" id="message" rows="3" required autoComplete="off"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

<form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

          </div>
        </div>

      </div> */}

    </div> 

  )
};



export default Contact;