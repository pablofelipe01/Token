import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
import Video from '../../videos/video.mp4'
// import { Button } from '../ButtonElements'
import { NavBtn, NavBtnLink, Button } from '../Navbar/NavbarElements'


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Token Solutions for Every Industry</HeroH1>
                <HeroP>
                We are a leading provider of innovative blockchain-based solutions for businesses and organizations. Our team of experts is dedicated to helping you leverage the power of blockchain technology to streamline your operations, improve efficiency, and drive growth.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="/signin" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary='true'
                    dark='true'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    >
                        Get Started 

                        
                    </Button>
                    
                </HeroBtnWrapper>
            </HeroContent>

            
        </HeroContainer>
    )
}

export default HeroSection
