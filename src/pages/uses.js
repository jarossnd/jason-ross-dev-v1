import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const UsesStyles = styled.div`
  h2 {
    margin: 0px;
  }

  .container {
    border: 3px solid var(--black);
    border-radius: 15px;
    font-size: 3rem;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 2rem;
    background-color: var(--blue);
  }

  @media screen and (max-width: 760px) {
    .container {
      border: 3px solid var(--black);
      border-radius: 15px;
      font-size: 2rem;
      text-decoration: none;
      margin-bottom: 10px;
      padding: 1rem;
      background-color: var(--blue);
    }
  }
`;

export default function UsesPage() {
  return (
    <>
      <SEO title="Uses" />
      <div className="item1">
        <h1>Uses</h1>
        <p>
          I often get asked what type of hardware or software I use and I keep
          track of it all on this page. I change this up often so check back for
          regular updates.
        </p>
        <UsesStyles>
          <div className="container">
            <h2>Hardware</h2>
            <ul>
              <li>
                🖥️ Desktop: Custom built AMD Ryzen 9 5950X 4th Gen, 64GB RAM,
                and 6TB of storage
              </li>
              <li>💻 Laptop: Lenovo Thinkpad x220</li>
              <li>🖥️ Monitor: LG 34" and HP 25"</li>
              <li>🖱️ Mouse: Logitech - MX Master 3</li>
              <li>⌨️ Keyboard: Logitech - G915</li>
              <li>📱 Phone: iPhone 12 Pro Max</li>
              <li>⌚ Watch: Apple Watch with GPS and Cellular</li>
            </ul>
          </div>
          <div className="container">
            <h2>Software</h2>
            <ul>
              <li>
                🔥 Terminal: Alacritty (Linux) HyperJS (Mac) and Windows
                Terminal (Windows)
              </li>
              <li>🧑‍💻 Code Editor: VSCode and NeoVim</li>
              <li>📓 Notetaking: Notion for personal and OneNote for work</li>
            </ul>
          </div>
          <div className="container">
            <h2>Office</h2>
            <ul>
              <li>Office Type: Currently working from home</li>
              <li>
                Desk: Custom butcher block with the Autonomous SmartDesk frame
              </li>
            </ul>
          </div>
          <div className="container">
            <h2>Other</h2>
            <ul>
              <li>☕ Coffee: Folgers</li>
              <li>📔 Notebook: Moleskine</li>
              <li>🛻 Vehicle: RAM 1500 Pickup</li>
              <li>🧻 Toiletpaper: Hey now, that is a weird question!</li>
            </ul>
          </div>
        </UsesStyles>
      </div>
    </>
  );
}
