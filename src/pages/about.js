import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

export default function AboutPage() {
    return (
      <>
      <SEO title="About" />
      <div className="item1">
        <h1>About</h1>
        <h2>Howdy, my name is Jason! I'm glad you are here 💩</h2>
        <p>
        I create technology videos on my YouTube channel found <a href="https://www.youtube.com/channel/UCP6Y5xvu8VSyXjFHwGMgc6g">here</a>. In my freetime I enjoy web development along with minimalist software on Linux based operating systems.
        </p>
      </div>
      </>
      )
    }