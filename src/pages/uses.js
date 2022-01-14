import React from 'react';

export default function UsesPage() {
    return (
      <>
      <div className="item1">
        <h1>Uses</h1>
        <p>I often get asked what type of hardware or software I use and I keep track of it all on this page. I change this up often so check back for regular updates.</p>
        <h2>Hardware</h2>
        <ul>
            <li>Laptop: MacBook Pro 2018</li>
            <li>Laptop 2: Surface Book 2</li>
            <li>Mouse: Logitech MX Master</li>
            <li>Keyboard: Logitech MX Keys</li>
        </ul>
        <h2>Software</h2>
        <ul>
            <li>Terminal: HyperJS (on Mac OS) and Windows Terminal</li>
            <li>Code Editor: VSCode, NeoVim</li>
        </ul>
        <h2>VSCode Extensions</h2>
        <ul>
          <li>Auto Rename Tag</li>
          <li>C/C++</li>
          <li>Cobalt2 Theme</li>
          <li>Code Runner</li>
          <li>Color Highlight</li>
          <li>ESLint</li>
          <li>GraphQL</li>
          <li>Markdown All in One</li>
          <li>Markdown Preview Enhanced</li>
        </ul>
      </div>
      </>
      )
    }