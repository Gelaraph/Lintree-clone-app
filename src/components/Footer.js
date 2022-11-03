import React from "react";
import I4G from "../assets/I4G.png";
import zuri from "../assets/zuri-logo.png";

const Footer = () => {
  const Image = ({ src, alt, className, id }) => {
    return (
      <>
        <img src={src} alt={alt} className={className} id={id} />
      </>
    );
  };
  return (
    <>
      <footer className="footer_container">
        <>
          <hr />
          <div className="content">
            <div>
              <Image src={zuri} alt="zuri logo" className="zuri_logo" />
            </div>

            <div className="footer_text">
              <p>HNG Internship 9 Frontend Task</p>
            </div>

            <div>
              <Image src={I4G} alt="I4g logo" className="i4g_logo" />
            </div>
          </div>
        </>
      </footer>
    </>
  );
};

export default Footer;
