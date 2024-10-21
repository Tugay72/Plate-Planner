import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Plate Planner. All Rights Reserved.</p>
          
          <div className="footer-sections">
            <div className="footer-section">
              <p><i>H = H</i></p>
            </div>
            <br />
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: support@yourcompany.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            
          </div>
        </div>
      </footer>
    );
}

export default Footer;