import React from 'react'
import { Link } from "react-router-dom";
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP, ServicesCard } from './ServicesElements'
// import Icon1 from '../../images/svg-d.svg'
import  image1 from './Images/image1.png'
import  image2 from './Images/image2.png'
import  image3 from './Images/image3.png'
import  image4 from './Images/image4.png'
import  image5 from './Images/image5.png'
import  image6 from './Images/image6.png'
import  image7 from './Images/image7.png'
import  image8 from './Images/image8.png'
import  image9 from './Images/image9.png'
import Icon2 from '../../images/svg-c.svg'
import Icon3 from '../../images/svg-a.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Success cases</ServicesH1>
            
            <ServicesWrapper >
            <a href={"https://www.procoreef.com/general-8"}>
                <ServicesCard >
                    <ServicesIcon src={image1}  />
                    <ServicesH2 >Procoreef</ServicesH2>
                    
                </ServicesCard>
            </a>
            <a href={'https://donvicente.co/tokens'}>
                <ServicesCard>
                    <ServicesIcon src={image2} />
                    <ServicesH2>Don Vicente</ServicesH2>
                </ServicesCard>
            </a>

            <a href={"https://socialtoken.netlify.app/"}>
                <ServicesCard>
                    <ServicesIcon src={image4} />
                    <ServicesH2>True Social Token</ServicesH2>
                </ServicesCard>
            </a>
            <a href={"https://xpo-pied.vercel.app"}>
                <ServicesCard>
                    <ServicesIcon src={image7} />
                    <ServicesH2>Sports Token</ServicesH2>
                </ServicesCard>
            </a>
            <a href={"https://azul-kappa.vercel.app"}>
                <ServicesCard>
                    <ServicesIcon src={image8} />
                    <ServicesH2>Token Azul</ServicesH2>
                </ServicesCard>
            </a>
            <a href={"https://puerto-venus.vercel.app/"}>
                <ServicesCard>
                    <ServicesIcon src={image9} />
                    <ServicesH2>Puerto Venus</ServicesH2>
                </ServicesCard>
            </a>
            
                   
           

                    
                
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
