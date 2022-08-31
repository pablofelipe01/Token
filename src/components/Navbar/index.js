import React, {useEffect, useState} from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Token Solutions</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon >
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="startup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >STARTUP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="realEstate"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >REAL ESTATE</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to="environment"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >ENVIRONMENT</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="social"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >SOCIAL</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >CLIENTS</NavLinks>
                        </NavItem>
                    </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to="/signin">Contact</NavBtnLink>
                        </NavBtn> */}
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>





        </>
    )
}

export default Navbar


