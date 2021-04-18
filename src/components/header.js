import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'
import {Nav, Navbar, Container} from "react-bootstrap"
import icon from '../assets/images/hexometer-logo.svg'
import {ButtonHover} from "./ButtonHover"
import {NavBar} from "../share/mockData"
import {ButtonLine} from "./ButtonLine"
import {Icon, InlineIcon} from '@iconify/react';
import menuOutlined from '@iconify-icons/ant-design/menu-outlined'
import chromeClose from '@iconify-icons/codicon/chrome-close'

export const Header = () => {
    const [scrolling, setScrolling] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [menuShow, setMenuShow] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop)
            setScrolling(e.target.documentElement.scrollTop > scrollTop)
        };
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [scrollTop])

    return (
        <Container>
            <Navbar className={scrollTop > 10 ? 'shadowNav' : ''} fixed='top'>
                <div className='nav-container'>
                    <Link to="/"><img src={icon} alt={icon} width={210}/></Link>
                    <Nav className="mr-auto">
                        <ul>
                            {
                                NavBar.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <Link to="/">{item.text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Nav>
                    <div className='auto-box'>
                        {
                            !menuShow
                                ? (
                                    <>
                                        <ButtonHover text='Get Started for Free'/>
                                        <ButtonLine text='Login'/>
                                    </>
                                )
                                : null
                        }

                        <div className='mobile_menu-icon-box' onClick={() => setMenuShow(!menuShow)}>
                            {
                                menuShow
                                    ? <Icon icon={chromeClose}/>
                                    : <Icon icon={menuOutlined}/>

                            }
                        </div>
                    </div>
                </div>

                <div className='nav-mobile shadowNav' style={{display: menuShow ? 'flex' : 'none'}}>
                    <Nav className="mr-auto">
                        <ul>
                            {
                                NavBar.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <Link to="/">{item.text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Nav>
                    <div className='auto-box'>
                        <ButtonHover text='Get Started for Free'/>
                        <ButtonLine text='Login'/>
                    </div>
                </div>
            </Navbar>
        </Container>

    )
}
