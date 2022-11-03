import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactDiv>
      <div className="contact-Container">
        <h1>Contact Me</h1>
        <h3>Hi there, contact me to ask me about anything you have in mind.</h3>

        <form action="" method="">
          <div className="names-grid">
            <div>
              <label htmlFor="first_name">First name</label>
              <br />
              <input id="first_name" placeholder="Enter your first name" />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <br />
              <input id="last_name" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="email-div">
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" placeholder="yourname@email.com" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message"
            ></textarea>
          </div>

          <div className="check-btn">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              You agree to providing your data to Angela Raphael who may contact
              you.
            </label>
          </div>

          <button id="btn_submit">Send message</button>
        </form>
      </div>
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  .contact-Container {
    width: 80%;
    margin: 0 auto;
    margin-top: 10rem;
  }
  h1 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #101828;
  }

  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: Gray/600;
  }
  form {
    margin-top: 3rem;
  }
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
  }
  input {
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 1em;
    margin-top: 0.3rem;
    outline: none;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
  }
  textarea {
    margin-top: 4px;
    padding: 1em;
    width: 100%;
    height: 132px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    outline: none;
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
  }

  .names-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-bottom: 1.5rem;
  }
  #first_name,
  #last_name,
  #email {
    width: 100%;
    height: 44px;
  }
  .email-div {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .check-btn {
    margin-top: 0.5rem;
    align-items: center;
  }
  #consent {
    margin-right: 3px;
    width: 20px;
  }
  button {
    margin-top: 2rem;
    width: 100%;
    height: 48px;
    background: #1570ef;
    border: 1px solid #1570ef;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  @media only screen and (max-width: 600px) {
    .names-grid {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }
`;
export default Contact;
