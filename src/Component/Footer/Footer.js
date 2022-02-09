import React from 'react';
import "../StyleSheet/footer/Footer.css"

const Footer = () => {
  return (
  <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Get In Touch</h2>             
                <p><i className="fas fa-phone"/>+012 345 67890</p>
                <p><i className="fa fa-envelope" />Gmail address@example.com</p>
                <div className="footer-social">
                  <a className="btn" href><i className="fab fa-twitter" /></a>
                  <a className="btn" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn" href><i className="fab fa-youtube" /></a>
                  <a className="btn" href><i className="fab fa-instagram" /></a>
                  <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Popular Links</h2>
                <a href>About Us</a>
                <a href>Contact Us</a>
                <a href>Our Service</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Useful Links</h2>
                <a href>Terms of use</a>
                <a href>Privacy policy</a>                
                <a href>Help</a>                
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>                
                <form>               
                  <input type="text" className="form-control" placeholder="Full Name" />
                  <input className="form-control" placeholder="Email" />
                  <button className="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>©<a href="#">APNACOLLEGE.in</a>, All Right Reserved. Designed By <a href="APNADOCTOR.IN">NEXT CODER</a></p>
        </div>
      </div>
      {/* Footer End */}
  </>
  );
};

export default Footer;
