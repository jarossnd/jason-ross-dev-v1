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
          I currently work for a fortune 500 company helping people get things
          done.
        </p>
        <p>
          When I’m not working, I enjoy web development, exploring new software,
          and using Linux based operating systems. I also create technology
          videos on my YouTube channel found{' '}
          <a href="https://www.youtube.com/channel/UCP6Y5xvu8VSyXjFHwGMgc6g">
            here
          </a>
          .
        </p>
        <p>
          You will find me using both Windows, MacOS, and Linux operating
          systems. The company I work for supports all 3 platforms, so I need to
          stay on top of it. Besides where I work, I also believe that you
          should know the ins and outs of each major OS to help your clients.
        </p>
        <p>
          Sometimes I get questions on what hardware and software I use. You can
          view my stuff on my <Link to="/uses">uses</Link> page.
        </p>
      </div>
    </>
  );
}
