import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'typeface-roboto-mono';

const NavStyles = styled.nav`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    grid-template-areas: 'logo nav';

    .logo {
        grid-area: logo;
        color: var(--yellow);
        margin: 0px;
        padding: 0px;
        line-height: 50px;
        float: left;
        font-size: 3rem;
    }
    .logo a {
        text-decoration: none;
        color: var(--yellow);
    }
    .nav {
        grid-area: nav;
        margin: auto;
        
  }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        float: right;
        text-align: center;
    }
    li {
        display: inline;
        padding: 0px 10px 0px 10px;
    }
    li a {
        min-width: 140px;
        height: 50px;
        text-align: right;
        line-height: 50px;
        color: var(--yellow);
        text-decoration: none;
        font-size: 3rem;
    }
    li:hover a {
        border-bottom: 3px solid var(--yellow);
        border-color: var(--yellow);
        border-bottom-color: var(--yellow);
    }
    @media screen and (max-width: 1346px) {
    }
    @media screen and (max-width: 760px) {
        grid-template-areas:
        'logo'
        'nav';
        grid-template-columns: 1fr;
        .nav {
            grid-area: nav;
            margin: 0px;
        }
        .logo {
            grid-area: logo;
            text-align: center;
        }
        ul {
            width: 100%;
            margin: auto;
            margin-bottom: 2rem;
        }
        li {
            text-align: center;
        }
        li a {
            text-align: center;
            height: 0px;
            line-height: 0px;
            font-size: 2rem;
            
        }
    }
`;

export default function Nav() {
    return (
        <div>
            <NavStyles>
                <div className="logo">
                    <Link to="/">&lt;JR /&gt;</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick="doReset(this)">Home</Link>
                        </li>
                        <li>
                            <Link to="/articles" onClick="doReset(this)">Articles</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick="doReset(this)">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick="doReset(this)">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </NavStyles>
        </div>
    );
}
