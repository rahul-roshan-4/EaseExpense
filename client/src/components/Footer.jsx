import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <section>
      <footer id="footer" style={{ padding: "30px" }}>
        <div className="upperPart">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <h3>
                ease<span style={{ color: "yellow" }}>Expense</span>
              </h3>
            </a>
            <p style={{ color: "rgb(191, 194, 196)", paddingRight: "120px" }}>
              Effective money management is the key to financial stability and
              achieving long-term financial goals
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "rgb(213, 213, 17)",
                fontSize: "large",
              }}
            >
              read more
            </a>
            <br />
          </div>
          <div className="col-sm-2">
            <h4>Services</h4>
            <a href="#" className="footerlink">
              Money Balance
            </a>
            <a href="#" className="footerlink">
              Activity
            </a>
            <a href="#" className="footerlink">
              Program
            </a>
            <a href="#" className="footerlink"></a>
          </div>
          <div className="col-sm-2">
            <h4>About</h4>
            <a href="#" className="footerlink">
              Staff
            </a>
            <a href="#" className="footerlink">
              Team
            </a>
            <a href="#" className="footerlink">
              Careers
            </a>
            <a href="#" className="footerlink">
              Blog
            </a>
          </div>
          <div className="col-sm-2">
            <h4>Resources</h4>
            <a href="#" className="footerlink">
              Security
            </a>
            <a href="#" className="footerlink">
              Global
            </a>
            <a href="#" className="footerlink">
              Chart
            </a>
            <a href="#" className="footerlink">
              Privacy
            </a>
          </div>
        </div>
        <div className="social">
          <a href="#" className="sociallink">
            <i className="icon-download fa fa-google"></i>
          </a>
          <a href="#" className="sociallink">
            <i className="icon-download fa fa-facebook"></i>
          </a>
          <a href="#" className="sociallink">
            <i className="icon-download fa fa-instagram"></i>
          </a>
          <a href="#" className="sociallink">
            <i className="icon-download fa fa-twitter"></i>
          </a>
          <a href="#" className="sociallink">
            <i className="icon-download fa fa-whatsapp"></i>
          </a>
          <p style={{ marginTop: "20px" }}>Copyright @easeExpense 2023</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
