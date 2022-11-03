import React from "react";
import slack from "../assets/slack.svg";
import sharebtn from "../assets/Avatar share.png";
import MoreIcon from "../assets/more.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const LinkButton = (props) => {
  return (
    <div className="links">
      <h2>{props.name}</h2>
    </div>
  );
};

const Image = ({ src, alt, className, id }) => {
  return (
    <>
      <img src={src} alt={alt} className={className} id={id} />
    </>
  );
};

const LinktreeCont = () => {
  const ProfileImage =
    "https://media-exp1.licdn.com/dms/image/D4D03AQFQjkjcpy67ig/profile-displayphoto-shrink_800_800/0/1664340424494?e=1672272000&v=beta&t=OCiLNtHjkE5Jlwhy2y4EyZYJX5AChd3-FM9eiqhoIT0";

  return (
    <div className="App">
      <div className="profile_section">
        <div className="share_profile">
          <Image
            src={sharebtn}
            alt="share button"
            className="share"
            id="share"
          />
        </div>
        {/* 'more button' for mobile view */}
        <div className="more">
          {/* <i className="bi bi-three-dots more_btn" id="more_btn"></i> */}
          <Image
            src={MoreIcon}
            alt="more button"
            className="more_btn"
            id="more_btn"
          />
        </div>

        <div className="img_container">
          <Image
            src={ProfileImage}
            alt="profile"
            id="profile__img"
            className="profile-img"
          />
        </div>

        <div className="profile_section_content">
          <p id="twitter">@gelaraph</p>
          <p id="slack">Angela Raphael</p>
        </div>
      </div>

      <div className="links">
        <div className="link_section">
          <a
            href="https://twitter.com/gelaraph"
            target="_blank"
            rel="noreferrer"
            id="twitter"
          >
            <LinkButton name="Twitter Link" />
          </a>

          <a
            href="https://training.zuri.team/"
            target="_blank"
            rel="noreferrer"
            id="btn__zuri"
          >
            <LinkButton name="Zuri Team" />
          </a>

          <a
            href="https://books.zuri.team"
            target="_blank"
            rel="noreferrer"
            id="books"
            title="Where you find books about design and coding"
          >
            <LinkButton name="Zuri Books" />
          </a>

          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=AngelaRaphael"
            target="_blank"
            rel="noreferrer"
            id="book__python"
          >
            <LinkButton name="Python Books" />
          </a>

          <a
            href="https://backgroundcheck.zuri.team"
            target="_blank"
            title="Make no more mistakes with Background Check for Coders"
            rel="noreferrer"
            id="pitch"
          >
            <LinkButton name="Background Check for Coders" />
          </a>

          <a
            href="https://books.zuri.team/design-rules"
            target="_blank"
            title="The Ultimate Design Book offered for free by Zuri"
            rel="noreferrer"
            id="book__design"
          >
            <LinkButton name="Design Books" />
          </a>

          <Link to="/contact" id="contact">
            <LinkButton name="Contact Me" />
          </Link>
        </div>
      </div>
      <div className="social_icons">
        <a href="https://slack.com">
          <Image
            src={slack}
            alt="slack"
            className="slack_icon"
            id="slack_icon"
          />
        </a>

        <a href="https://github.com/Udee101">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="black"
            className="bi bi-github git_icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LinktreeCont;
