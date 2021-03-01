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
          Hello! My name is Jason I live in the United States are currently work for a fortune 100 company. I enjoy web development and occasionally will take on projects. Some other interests I have are anything technology, motorcycles, firearms, leadership, and fitness. On the weekend you can find me spending time with family, working on a project, or having a cold beer at a local pub.
        </p>
        <p>
          In web development, I currently enjoy developing on the Jamstack architecture. My most recent projects have been building sites with GatsbyJS. I also have experience with WordPress and building custom templates. 
        </p>
        <p>
          For a list of hardware and software I use, please visit my <Link to="/uses">uses</Link> page.
        </p>
      </div>
      </>
      )
    }