import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'typeface-roboto-mono';

const NavStyles = styled.nav`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'logo menu';

    .logo {
        grid-area: logo;
        padding: 10px 20px;
        font-size: 3rem;
    }

    .menu {
        grid-area: menu;
        padding: 10px 20px;
        
    }

    .menu ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        float: right;
        text-align: center;
    }

    .menu li {
        display: inline;
        padding: 0px 10px 0px 10px;
    }

    li a {
        font-size: 3rem;
    }

    @media screen and (max-width: 760px) {
        max-width: 760px;
        grid-template-areas:
        'logo'
        'menu';

        grid-template-columns: 1fr;

        .menu {
            grid-area: menu;
            margin: 0;
            text-align: center;
        }

        ul {
            width: 100%;
            text-align: center;
        }

        li {
            text-align: center;
        }
        li a {
            font-size: 2rem
        }
        .logo {
            grid-area: logo;
            text-align: center;
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
                <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </NavStyles>
        </div>
    );
}
