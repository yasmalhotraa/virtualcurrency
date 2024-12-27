import React from "react";
import ButtonMailto from "./MailTo";

const Footer = () => {
  const footerStyle = {
    position: "relative", // Important to position the pseudo-element absolutely
    backgroundColor: "#212121",
    backgroundImage:
      "url(https://media.istockphoto.com/photos/bitcoin-cryptocurrency-futuristic-innovation-digital-picture-id1297074905?b=1&k=20&m=1297074905&s=170667a&w=0&h=pHcAAJHae3yjXVcOwnu0lCAPClwLxy6HUn4OitrBiic=)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "40px 20px 0px 20px",
    fontFamily: "'Roboto', sans-serif",
  };

  const overlayStyle = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    zIndex: -1, // Ensures the overlay stays behind the content
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const columnStyle = {
    flex: "1 1 250px",
    textAlign: "left",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    padding: "10px",
  };

  const headingStyle = {
    color: "#00bcd4", // Light cyan for headings
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "15px",
    fontSize: "1.5rem",
    letterSpacing: "1px",
  };

  const hrStyle = {
    border: "1px solid #ddd",
    width: "60px",
    marginBottom: "20px",
    borderTop: "1px solid #00bcd4", // Accent line in cyan
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.8",
    marginBottom: "15px",
    color: "#ddd", // Lighter text for paragraphs
  };

  const linkStyle = {
    textDecoration: "underline",
    color: "#00bcd4",
    transition: "color 0.3s ease",
  };

  const socialIconStyle = {
    fontSize: "28px",
    color: "white",
    marginRight: "20px",
    transition: "color 0.3s ease",
  };

  const footerCopyStyle = {
    backgroundColor: "#121212",
    color: "#bbb",
    padding: "20px 0",
    textAlign: "center",
    fontSize: "1rem",
    marginTop: "30px",
  };

  return (
    <footer style={footerStyle}>
      <div style={overlayStyle}></div>{" "}
      {/* Overlay to adjust the background opacity */}
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Virtual Currency Library System</h3>
          <hr style={hrStyle} />
          <p style={paragraphStyle}>
            VCL is a digital currency price-tracking website that allows you to
            monitor the price of any cryptocurrency with accurate data and
            real-time updates.
          </p>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>
            Products{" "}
            <sub>
              <span style={{ color: "Green" }}>(Upcoming)</span>
            </sub>
          </h3>
          <hr style={hrStyle} />
          <p style={paragraphStyle}>
            <a style={linkStyle} href="#!">
              Watchlist
            </a>
          </p>
          <p style={paragraphStyle}>
            <a style={linkStyle} href="#!">
              More Coins
            </a>
          </p>
          <p style={paragraphStyle}>
            <a style={linkStyle} href="#!">
              Help
            </a>
          </p>
        </div>

        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact</h3>
          <hr style={hrStyle} />
          <p style={paragraphStyle}>
            <i className="fas fa-home mr-3 fa fa-location"></i> Delhi Technical
            Campus, Greater Noida
          </p>
          <ButtonMailto
            label={<i className="fa fa-envelope mr-3 pb-3"> Mail Me</i>}
            mailto="mailto:yashmalhotraa01@gmail.com"
          />
          <p style={paragraphStyle}>
            <i className="fa fa-phone mr-3"></i> + 91 987199898
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
