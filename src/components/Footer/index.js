import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,  FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink  } from './FooterElenents'
import { animateScroll as scroll } from 'react-scroll'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>

                            
                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">Clients</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Work with Us</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>

                        
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>

                            
                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">Clients</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Work with Us</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>

                        
                    </FooterLinkItems>

                    
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>

                            
                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">Clients</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Work with Us</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>

                        
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>

                            
                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">Clients</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Work with Us</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>

                        
                    </FooterLinkItems> */}

                    
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Token Solutions
            
                    </SocialLogo>
                    <WebsiteRights>Token Solutions ® {new Date().getFullYear()} All rights reserved -- contact us in Linkedin</WebsiteRights>
                    <SocialIcons>
                        {/* <SocialIconLink href="/" target="_blank" arial-label="Facebook"><FaFacebook /></SocialIconLink> */}
                        {/* <SocialIconLink href="/" target="_blank" arial-label="Instagram"><FaInstagram /></SocialIconLink> */}
                        {/* <SocialIconLink href="/" target="_blank" arial-label="Youtube"><FaYoutube /></SocialIconLink> */}
                        {/* <SocialIconLink href="/" target="_blank" arial-label="Twitter "><FaTwitter /></SocialIconLink> */}
                        <SocialIconLink href="https://www.linkedin.com/in/pablo-f-acebedo/" target="_blank" arial-label="Linkedin "><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
        
    </FooterContainer>
    )
}

export default Footer
