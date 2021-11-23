import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP, ServicesCard } from './ServicesElements'
import Icon1 from '../../images/svg-d.svg'
import Icon2 from '../../images/svg-c.svg'
import Icon3 from '../../images/svg-a.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Tokenization</ServicesH2>
                    <ServicesP>Token Solutions provides powerful data protection features for decentralization</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Blockchain</ServicesH2>
                    <ServicesP>Decentralized database that is shared among computer network nodes.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Smart Contracts</ServicesH2>
                    <ServicesP>Programs that run when criteria are satisfied and maintained on a blockchain</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
