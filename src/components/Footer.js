import React from 'react'
import {Container} from "react-bootstrap"
import {MenuData, ToolsData} from "../share/mockData"
import {Icon} from '@iconify/react'
import facebookIcon from '@iconify-icons/brandico/facebook'
import youtubeFill from '@iconify-icons/akar-icons/youtube-fill'
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill'
import twitterFill from '@iconify-icons/akar-icons/twitter-fill'
import instagramFill from '@iconify-icons/akar-icons/instagram-fill'

export const Footer = () => {
    return (
        <footer>
            <div className='footer_top'>
                <Container>
                    <div className='footer_top-box'>
                        <h2>Any questions?</h2>
                        <span>
                            Chat now
                            <span>
                                &nbsp;
                                or Email to
                                &nbsp;
                            </span>
                            support@hexometer.com
                        </span>
                    </div>
                </Container>
            </div>
            <div className='footer_middle'>
                <Container>
                    <div className='footer_middle-box'>
                        <div className='footer_middle-box-info'>
                            <p>
                                Hexometer is your AI sidekick that works behind the scenes, monitoring your website
                                and marketing 24/7. Detect downtime and fix page speed performance issues, security
                                vulnerabilities, page & JS errors, email deliverables, SEO optimization or server
                                configuration problems before they burn a hole in your pocket.Get started in minutes
                                - no code changes required.
                            </p>
                        </div>
                        <div className='footer_middle-box-tools'>
                            <h3>
                                Tools
                            </h3>
                            <div className='footer_middle-box-tools-box-info'>
                                <ul>
                                    {
                                        ToolsData.map(item => {
                                            return (
                                                <li key={item.id}>
                                                    <a href="#">{item.text}</a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className='footer_middle-box-menu'>
                            <h3>
                                Menu
                            </h3>
                            <div className='footer_middle-box-menu-box-info'>
                                <ul>
                                    {
                                        MenuData.map(item => {
                                            return (
                                                <li key={item.id}>
                                                    <a href="#">{item.text}</a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className='footer_middle-box-follow'>
                            <h3>
                                Follow us
                            </h3>

                            <div className='footer_middle-box-menu-box-info'>
                                <div className='item fb'>
                                    <Icon icon={facebookIcon} width={9} height={14}/>
                                </div>
                                <div className='item you'>
                                    <Icon icon={youtubeFill} width={15} height={15}/>
                                </div>
                                <div className='item link'>
                                    <Icon icon={linkedinFill} width={13} height={14}/>
                                </div>
                                <div className='item twi'>
                                    <Icon icon={twitterFill} width={14} height={14}/>
                                </div>
                                <div className='item inst'>
                                    <Icon icon={instagramFill} width={14} height={14}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='footer_bottom'>
                <Container>
                    <span>
                        © 2021 Hexact, Inc. All rights reserved. 24A Trolley Square
                        PMB 2111, Wilmington, DE 19806, United States
                    </span>
                    <div className='footer_bottom-items'>
                        <span>Terms of Service</span>
                        <span className='borderSide'>Privacy Policy</span>
                        <span>Cookie Policy</span>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
