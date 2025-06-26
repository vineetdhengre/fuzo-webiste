import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-4">
    <div className="container">
      <div className="row">
        {/* Company Info */}
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <h5 className="font-weight-bold mb-3" style={{ color: '#50a986' }}> Fuzo</h5> 
          <div className="mb-2" style={{ width: 64, height: 4, background: '#50a986', borderRadius: 2 }} />
          <p className="text-light small mb-2">
            Revolutionizing healthy snacking with over 75+ innovative options.
            From traditional Indian flavors to international fusion.
          </p>
          <div className="mb-1"><Phone size={18} className="mr-2 text-success" /> +91 123456789</div>
          <div><Mail size={18} className="mr-2 text-info" /> support@fuzo.com</div>
        </div>
        {/* Quick Links */}
        <div className="col-6 col-lg-3 mb-4">
          <h6 className="font-weight-bold mb-3">Quick Links</h6>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-light">Home</Link></li>
            <li><Link to="/product" className="text-light"> All Snacks</Link></li>
            <li><Link to="/offers" className="text-light"> Gifting </Link></li>
            <li><Link to="/about-us" className="text-light">About Us</Link></li>
            <li><Link to="/delivery" className="text-light">Delivery</Link></li>
          </ul>
        </div>
        {/* Categories */}
        <div className="col-6 col-lg-3 mb-4">
          <h6 className="font-weight-bold mb-3">Categories</h6>
          <ul className="list-unstyled">
            <li><Link to="" className="text-light">Idli</Link></li>
            <li><Link to="" className="text-light">Dosa</Link></li>
            <li><Link to="" className="text-light">Oats</Link></li>
            <li><Link to="" className="text-light">Dhokla</Link></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="col-12 col-lg-3 mb-4">
          <h6 className="font-weight-bold mb-3">Get In Touch</h6>
          <div className="mb-2"><MapPin size={18} className="mr-1 text-warning" /> Mumbai, India</div>
          {/* <div className="mb-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mr-2"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div> */}
          <div>
            <p className="mb-2">WhatsApp us:</p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm"
            >
              <Phone className="mr-2" size={16} />
              Chat with us
            </a>
          </div>
        </div>
      </div>
      <hr className="border-light" />
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-left mb-2 mb-md-0 small">
          © 2025. All rights reserved. Fuzo.
        </div>
        <div className="col-md-6 text-center text-md-right small">
          <Link to="/pages/privacy-policy" className="text-light mr-3">Privacy Policy</Link>
          <Link to="/pages/terms-of-service" className="text-light mr-3">Terms of Service</Link>
          <Link to="/pages/shipping-policy" className="text-light">Shipping Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;