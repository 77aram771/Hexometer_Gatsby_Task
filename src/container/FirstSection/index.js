import React from 'react'
import Typewriter from "typewriter-effect";
import {ButtonHover} from "../../components/ButtonHover";
import firstSectionImage from "../../assets/images/first-section-image.png";

export const FirstSection = () => {
    return (
        <div className='home_page-first-section'>
            <div className='home_page-first-section-box'>
                <div className='home_page-first-section-left'>
                    <div className='home_page-first-section-write-text'>
                        <h1>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Geeks For Geeks")
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString("Welcomes You")
                                        .start()
                                }}
                                options={{
                                    loop: true
                                }}
                            />
                        </h1>
                    </div>
                    <div className='home_page-first-section-info'>
                        <h2>
                            Meet Hexometer, your AI sidekick that works
                            <br/>
                            24/7 to catch problems before they affect
                            <br/>
                            your business.
                        </h2>
                        <span>
                            Every day your website can face an increasing range of threats. Server problems,
                            slow landing pages, broken links, frustrating mobile experiences, embarrassing
                            spelling mistakes, changing SEO rules, 3rd party services breaking,
                            or security issues that put your business at risk.
                        </span>
                        <span>
                            To make matters worse, these issues can linger unnoticed,
                            wasting your ad-budget and costing your business lost sales.
                        </span>
                        <span>
                            Hexometer monitors your website 24/7, to catch Availability,
                            Performance, User experience, SEO, Health and Security problems,
                            before they affect your customers.
                        </span>
                    </div>
                    <div className='home_page-first-section-button'>
                        <ButtonHover text='Get started with our free plan'/>
                    </div>
                </div>
                <div className='home_page-first-section-right'>
                    <img src={firstSectionImage} alt='img'/>
                </div>
            </div>
        </div>
    )
}
