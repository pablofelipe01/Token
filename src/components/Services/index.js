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
                    <ServicesP>Develop a large-scale coral reef restoration project in the Caribbean</ServicesP>
                </ServicesCard>
            </a>
            <a href={'https://donvicente.co/tokens'}>

            
                <ServicesCard>
                    <ServicesIcon src={image2} />
                    <ServicesH2>Blockchain</ServicesH2>
                    <ServicesP>Don Vicente Quinoa Spirits is the result of innovative
                        recipes -WHISKEY & GIN- </ServicesP>
                </ServicesCard>
            </a>
            <a href={"https://wum.bo/profile/3KiyiM4AKwfAFBsc575NaNTX3dArDVxj3rjK8B5ZrByK"}>
                <ServicesCard>
                    <ServicesIcon src={image3} />
                    <ServicesH2>Social Token</ServicesH2>
                    <ServicesP>Social token is a type of cryptocurrency used to monetize a brand</ServicesP>
                </ServicesCard>
            </a>
                
            <a href={"https://wum.bo/profile/4HK5WwBnX3ATZrw56stf1xuY9PPCU7D9nvkLPLFVy9Tq"}>
                <ServicesCard>
                    <ServicesIcon src={image4} />
                    <ServicesH2>Social Token</ServicesH2>
                    <ServicesP>Social token is a type of cryptocurrency used to monetize a brand</ServicesP>
                </ServicesCard>
            </a>
            <a href={"https://wum.bo/profile/GLiafMRmUMWfTrBt1pygfvBBSNh4BiW223KZqVxWeHVs"}>
                <ServicesCard>
                    <ServicesIcon src={image5} />
                    <ServicesH2>Social Token</ServicesH2>
                    <ServicesP>Social token is a type of cryptocurrency used to monetize a brand</ServicesP>
                </ServicesCard>
            </a>

            <a href={"https://socialtoken.netlify.app/"}>
                <ServicesCard>
                    <ServicesIcon src={image6} />
                    <ServicesH2>Social Token</ServicesH2>
                    <ServicesP>Social token Landing Page, cryptocurrency used to monetize a brand</ServicesP>
                </ServicesCard>
            </a>
                
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
