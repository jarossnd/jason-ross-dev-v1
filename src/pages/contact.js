import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const MyDetailsStyles = styled.div`
  border: 3px solid var(--black);
  border-radius: 15px;
  font-size: 3rem;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 20px;
  background-color: var(--blue);
`;

const FormContactStyles = styled.div`
  #contact-form {
    border: 3px solid var(--black);
    border-radius: 15px;
    font-size: 3rem;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 20px;
    background-color: var(--blue);
  }
  #contact,
  label,
  input[name='submit'] {
    position: relative;
  }
  label > span,
  input,
  textarea,
  button {
    box-sizing: border-box;
  }
  label {
    display: block;
  }
  label > span {
    display: none;
  }
  input,
  textarea,
  button {
    width: 100%;
    padding: 0.5em;
    border: none;
  }
  input[type='text'],
  input[type='email'],
  textarea {
    margin: 0 0 1em;
    border: 1px solid var(--yellow);
    outline: none;
  }
  input.invalid,
  textarea.invalid {
    border-color: #d5144d;
  }
  textarea {
    height: 6em;
  }
  input[type='submit'],
  button {
    background: var(--yellow);
    color: #333;
  }
  input[type='submit']:hover,
  button:hover {
    background: var(--yellow);
    font-weight: bold;
  }
  h3 {
    margin: 0px;
  }
  @media screen and (max-width: 760px) {
    #contact-form h2 {
      font-size: 2em;
      line-height: 1.5;
    }
    label > span {
      vertical-align: top;
      display: inline-block;
      padding: 0.5em;
      border: 1px solid transparent;
      text-align: right;
    }
    input,
    textarea,
    button {
      line-height: 1.5;
    }
    textarea {
      height: 10em;
    }
    input[type='submit'],
    button {
    }
  }
`;

export default function ContactPage() {
    return (
      <>
      <SEO title="Contact" />
      <div className="item1">
        <h1>Contact</h1>
        <h2>I hear you want to get in touch with me. You're at the right place!</h2>
        <p>
        Feel free to reach out to me regarding any questions or projects. My preferred contact method is e-mail by using the contact form below. However, you can also get in touch with me on the following platforms below.
        </p>
      </div>
      <div className="item2" />
      <div className="item3">
      <MyDetailsStyles>
          <h3>My Details</h3>
          <p>Twitter: @jarossnd</p>
          <p>Facebook: What is Facebook?</p>
          <p>Github: @jarossnd</p>
          <p>Code Pen: @jarossnd</p>
          <p>Email: Use the contact form on this page</p>
        </MyDetailsStyles>
      </div>
      <div className="item4">
      <FormContactStyles>
          <section id="contact-form">
            <h3>Contact Form</h3>
            <form name="contactForm" method="POST" netlify-honeypot="bot-field" data-netlify="true">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contactForm" />
              <p>
                <label>
                  <span>Name:</span>
                  <input type="text" name="name" placeholder="Name" />
                </label>
              </p>
              <p>
                <label>
                  <span>Email:</span>
                  <input type="text" name="email" placeholder="Email" />
                </label>
              </p>
              <p>
                <label>
                  <span>Message:</span>
                  <textarea name="message" placeholder="Your message goes here" />
                </label>
              </p>
              <div data-netlify-recaptcha="true" />
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </section>
        </FormContactStyles>
      </div>
      </>
      )
    }