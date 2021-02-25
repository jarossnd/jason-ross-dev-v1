import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const ContentStyles = styled.div`
    h1 {
        font-size: 4rem;
    }
`;

export default function Layout({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Nav />
            {children}
            <Footer />
        </div>
    );
}