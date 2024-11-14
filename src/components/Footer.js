import React from "react";
import ButtonMailto from "./MailTo";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#212121", 
    color: "white", 
    padding: "40px 20px", 
    fontFamily: "'Roboto', sans-serif"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
  };

  const columnStyle = {
    flex: "1 1 200px",
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "skyblue",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "1.25rem",
  };

  const hrStyle = {
    border: "1px solid #ddd",
    width: "50px",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "0.95rem",
    lineHeight: "1.6",
  };

  const linkStyle = {
    textDecoration: "underline",
    color: "white",
  };

  const socialIconStyle = {
    fontSize: "24px",
    color: "white",
    marginRight: "20px",
  };

  const footerCopyStyle = {
    backgroundColor: "#121212",
    color: "#bbb",
    padding: "20px 0",
    textAlign: "center",
    fontSize: "0.875rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Virtual Currency Library System</h3>
          <hr style={hrStyle} />
          <p style={paragraphStyle}>
            VCL is a digital currency price-tracking website that allows you to monitor the price of any cryptocurrency with accurate data and real-time updates.
          </p>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>
            Products{" "}
            <sub>
              <span style={{ color: "Green" }}>(UpComing)</span>
            </sub>
          </h3>
          <hr style={hrStyle} />
          <p style={paragraphStyle}>
            <a style={linkStyle} href="#!">Watchlist</a>
          </p>
          <p style={paragraphStyle}>
            <a style={linkStyle} href="#!">More Coins</a>
          </p>
          <p style={paragraphStyle}>
            <a style={linkStyle} href="#!">Help</a>
          </p>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact</h3>
          <hr style={hrStyle} />
          <p style={paragraphStyle}>
            <i className="fas fa-home mr-3 fa fa-location"></i> Delhi Technical Campus, Greater Noida
          </p>
          <ButtonMailto label={<i className="fa fa-envelope mr-3 pb-3"> Mail Me</i>} mailto="mailto:yashmalhotra330@gmail.com" />
          <p style={paragraphStyle}>
            <i className="fa fa-phone mr-3"></i> + 91 987199898
          </p>
          <p style={paragraphStyle}>
            <i className="fa fa-phone mr-3"></i> + 91 7017631110
          </p>
        </div>

  
      </div>

      <div style={footerCopyStyle}>
        © 2023 Copyright: Virtual Currency Library System
      </div>
    </footer>
  );
};

export default Footer;
