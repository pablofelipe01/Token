import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />    
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='startup' onClick={toggle}>
                        Startup
                    </SidebarLink>
                    <SidebarLink to='reaEstate' onClick={toggle}>
                        Real Estate
                    </SidebarLink>
                    
                    <SidebarLink to='environment' onClick={toggle}>
                    Environment
                    </SidebarLink>
                    
                    <SidebarLink to='social' onClick={toggle}>
                    Social
                    </SidebarLink>

                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute to="/signin">Contact</SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>           
        </SidebarContainer>
    )
}

export default Sidebar
