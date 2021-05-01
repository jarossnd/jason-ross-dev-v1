import React from 'react';

export default function UsesPage() {
    return (
      <>
      <div className="item1">
        <h1>Uses</h1>
        <h2>Here is a list of hardware and software I use</h2>
        <h4>Hardware</h4>
        <ul>
            <li>Laptop: MacBook Pro 2018</li>
            <li>Mouse: Logitech G502 HERO</li>
            <li>Keyboard: Magic Keyboard with Numeric Keypad</li>
        </ul>
        <h4>Software</h4>
        <ul>
            <li>Terminal: HyperJS</li>
            <li>Code Editor: VSCode, NeoVim</li>
        </ul>
        <h4>VSCode Extensions</h4>
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