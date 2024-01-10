import React from "react";
import "./Footer.css"
import Policy from "../Policy/Policy";

const Footer = () => {
  return (
    <React.Fragment>
<Policy/>
    <footer className="footer">
    <div className="subscribe-row">
      <div className="container">
        <div className="footer-row-wrapper">
          <div className="footer-subscribe-wrapper">
            <div className="footer-subscribe">
              <div className="footer-subscribe-top">
                <h3 className="subscribe-title">Get our emails for info on new items, sales and more.</h3>
                <p className="subscribe-desc">We`ll email you a voucher worth $10 off your first order over $50.</p>
              </div>
              <div className="footer-subscribe-bottom">
                <form>
                  <input type="text" placeholder="Enter your email address." />
                  <button className="btn">Subscribe</button>
                </form>
                <p className="privacy-text">
                  By subscribing you agree to our <a href="#">Terms & Conditions and Privacy & Cookies Policy.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-top">
              <h3 className="contact-title">
                Need help? <br />
                (+90) 123 456 78 90
              </h3>
              <p className="contact-desc">We are available 8:00am – 7:00pm</p>
            </div>
            <div className="footer-contact-bottom">
              <div className="download-app">
                <a href="#">
                  <img src="img/footer/app-store.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/footer/google-play.png" alt="" />
                </a>
              </div>
              <p className="privacy-text">
                <strong>Shopping App:</strong> Sosyal Medya hesaplarımızdan bize ulaşabilirsiniz.
                info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widgets-row">
      <div className="container">
        <div className="footer-widgets">
          <div className="brand-info">
            <div className="footer-logo">
               <a href="index.html"><img  className="header-logo" src="/img/logo.png" alt="" /></a>
            </div>
            <div className="footer-desc">
              <p> Adres Merkezi : Mehmet Akif Mahallesi 1.Serhat Sok , No 37 İkitelli/ İstanbul</p>
            </div>
            <div className="footer-contact">
              <p>
                <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> – <a
                  href="mailto:iletisim@lupinn.com">iletisim@lupinn.com</a>
              </p>
            </div>
          </div>
          <div className="widget-nav-menu">
            <h4>BİLGİ</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Gizlilik Politikası</a>
              </li>
              <li>
                <a href="#">Güvenlik Politikası</a>
              </li>
            
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>HESAP</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Siparişlerim</a>
              </li>
              <li>
                <a href="#">Hesap Detayları</a>
              </li>
              <li>
                <a href="#">Siparişlerimi Takip Et</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>KATEGORİLER</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Kadın</a>
              </li>
              <li>
                <a href="#">Erkek</a>
              </li>
              <li>
                <a href="#">Çocuk-Bebek</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-row">
      <div className="container">
        <div className="footer-copyright">
          <div className="site-copyright">
            <p>
              Lupinn 2024 © <a href="https://ytsocialweb.com/"><b>ytsocialweb.com</b> tarafından tasarlanmıştır.</a> 
            </p>
          </div>
          <a href="#">
            <img src="img/footer/cards.png" alt="" />
          </a>
          <div className="footer-menu">
            <ul className="footer-menu-list">
              <li className="list-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-item">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="list-item">
                <a href="#">Returns Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </React.Fragment>
    
  )
}

export default Footer;