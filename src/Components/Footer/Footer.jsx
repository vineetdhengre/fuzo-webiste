import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-4">
    <div className="container">
      <div className="row">
        {/* Company Info */}
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <h5 className="font-weight-bold mb-3" style={{ color: '#50a986' }}> Sajj Impex </h5>
          <div className="mb-2" style={{ width: 64, height: 4, background: '#50a986', borderRadius: 2 }} />
          <p className="text-light small mb-2">
            We are changing the snacking industry with healthy options that are just as delicious.

          </p>
          <div className="mb-1">
            <a href="tel:+912267705210" className="flex items-center text-success">
              <Phone size={18} className="mr-2" />
              +912267705210
            </a>
            </div>

            <div>
            <a href="mailto:support@fuzo.com" className="flex items-center text-success">
              <Mail size={18} className="mr-2" />
              support@fuzo.com
            </a>
          </div>

          {/* <div className="mb-1"><Phone size={18} className="mr-2 text-success" href="tel:+912267705210" /> +912267705210 </div>
          <div><Mail size={18} className="mr-2 text-info" href="mailto:support@fuzo.com" /> support@fuzo.com</div> */}
        </div>
        {/* Quick Links */}
        <div className="col-6 col-lg-3 mb-4">
          <h6 className="font-weight-bold mb-3">Quick Links</h6>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-light">Home</Link></li>
            <li><Link to="/product" className="text-light"> Products </Link></li>
            <li><Link to="/offers" className="text-light"> About Us </Link></li>
            <li><Link to="/about-us" className="text-light">Gifting </Link></li>
            <li><Link to="/delivery" className="text-light">Bulk Orders </Link></li>
          </ul>
        </div>
        {/* Categories */}
        <div className="col-6 col-lg-3 mb-4">
          <h6 className="font-weight-bold mb-3">Categories</h6>
          {/* <ul className="list-unstyled">
            <li><Link to="" className="text-light">Idli</Link></li>
            <li><Link to="" className="text-light">Dosa</Link></li>
            <li><Link to="" className="text-light">Oats</Link></li>
            <li><Link to="" className="text-light">Dhokla</Link></li>
          </ul> */}
        </div>
        {/* Contact & Social */}
        <div className="col-12 col-lg-3 mb-4">
          <h6 className="font-weight-bold mb-3">Get In Touch</h6>
          <div className="mb-2"><MapPin size={18} className="mr-1 text-warning" /> 1, Gr Ujagar Chambers, Sunder Baug Lane, MBPT Colony, Deonar, Chembur, Mumbai, Maharashtra 400088</div>
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