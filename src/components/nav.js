import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'typeface-roboto-mono';

const NavStyles = styled.nav`
    .logo {
        font-size:5rem;
    }
`;

export default function Nav() {
    return (
        <div>
            <NavStyles>
                <div className="logo">
                    <Link to="">Jason Ross</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </NavStyles>
        </div>
    );
}