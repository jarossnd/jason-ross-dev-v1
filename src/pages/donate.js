import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';


const DonateStyles = styled.div`
  .donate-container {
    border: 3px solid var(--black);
    border-radius: 15px;
    font-size: 3rem;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 20px;
    background-color: var(--blue);
  }

  @media screen and (max-width: 760px) {
    .donate-container {
      border: 3px solid var(--black);
      border-radius: 15px;
      font-size: 2rem;
      text-decoration: none;
      margin-bottom: 10px;
      padding: 10px;
      background-color: var(--blue);
    }
  }
`;


export default function DonatePage() {
  return (
    <>
      <SEO title="Donate" />
      <div className="item1">
        <h1>Donate</h1>
        <h2>
          Like what I do and want to help the cause? Here are some ways you can
          help:
        </h2>
        <p>
          Buy me a 🍺 using{' '}
          <a href="https://www.paypal.com/donate?hosted_button_id=VAQTBWLXBKD3S">
            PayPal
          </a>
        </p>
      </div>
	  <DonateStyles>
	  <div className="donate-container">
	  <h2>Monero</h2>
	  <p>XMR: 8BdJhzfMn1BfwF8gNxFoS4DBv3HtwNzGBNAmLFaJHmcv6Tt7vuwVb8Y9z7v9oogFskFx4wPWiUcQw9CmmHURzwi3JP6xDLG</p>
	  </div>
	  </DonateStyles>
    </>
  );
}
