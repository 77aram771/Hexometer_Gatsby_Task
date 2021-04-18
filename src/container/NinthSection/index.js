import React from 'react'
import homeimg8 from "../../assets/images/home_img8.png"
import {ButtonHover} from "../../components/ButtonHover"

export const NinthSection = () => {
    return (
        <div className='home_page-ninth-section'>
            <div className='home_page-ninth-section-box'>
                <div className='home_page-ninth-section-title'>
                    <h3>
                        Spot frustratingly slow pages across device types with performance monitoring
                    </h3>
                </div>
            </div>
            <div className="home_page-ninth-info-box">
                <div className='home_page-ninth-info-box-first'>
                    <img src={homeimg8} alt="img"/>
                </div>
                <div className='home_page-ninth-info-box-second'>
                        <span>
                            Did you know that over thirty thousand websites are infected by some type of malware
                            daily? Security issues can cause downtime, loss of reputation, blacklisted search rankings
                            as well as a steep cost to fix and restore your website.
                        </span>
                    <span>
                            Hexometer continually checks if your domain is blacklisted by the leading security
                            authorities and keeps an eye on your security headers, SSL best practices, blacklisted
                            IP’s as well as your homepage for malicious URLs.
                        </span>
                    <span>
                            Troubleshoot security issues by performing on-demand audits and monitor your progress
                            through time.
                        </span>
                    <div className='home_page-ninth-section-button'>
                        <ButtonHover text='Get started with our free plan'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
