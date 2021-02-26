import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
    footer p {
        text-align: center;
        font-size: 2rem;
    }
    .footerSmall {
        font-size: 1rem;
    }
`;

export default function Footer() {
    return <FooterStyles>
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()} Jason Ross</p>
            <p class="footerSmall">Made with <span style={{color: 'red'}}>&hearts;</span> using GatsbyJS and Netlify.</p>
        </footer>
    </FooterStyles>
}