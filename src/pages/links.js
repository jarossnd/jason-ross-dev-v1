import React from 'react';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  return (
    <>
      <SEO title="Links" />
      <div className="item1">
        <h1>Links</h1>
        <p>
          This page contains some useful links that I frequently visit or find
          useful. I just created this page so it will take time to fully
          populate this page.
        </p>
        <h2>My Links</h2>
        <ul>
          <li>
            <a
              href="https://www.jasonross.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jason Ross Xyz
            </a>{' '}
          </li>
          <li>
            <a
              href="https://github.com/jarossnd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jason's GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCP6Y5xvu8VSyXjFHwGMgc6g"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Channel
            </a>
          </li>
        </ul>
        <h2>Linux</h2>
        <ul>
          <li>
            <a
              href="https://aur.archlinux.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arch AUR
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
