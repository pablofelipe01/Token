import React from 'react'
import {  FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink  } from './FooterElenents'
import { animateScroll as scroll } from 'react-scroll'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
    <FooterContainer>
        <FooterWrap>
          

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Token Solutions
                    </SocialLogo>
            
                    <WebsiteRights>Token Solutions ® {new Date().getFullYear()} All rights reserved -- contact us pacebedo@web3tokensolutions.io</WebsiteRights>
                    <SocialIcons>

                        <SocialIconLink href="https://www.linkedin.com/in/pablo-f-acebedo/" target="_blank" arial-label="Linkedin "><FaLinkedin /></SocialIconLink>
                
                        <SocialIconLink href="https://twitter.com/tokensolutions" target="_blank" arial-label="Twitter "><FaTwitter /></SocialIconLink>
                       
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
        
    </FooterContainer>
    )
}

export default Footer
