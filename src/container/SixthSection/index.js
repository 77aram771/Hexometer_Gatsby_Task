import React from 'react'
import homeimg5 from "../../assets/images/home_img5.png"
import {ButtonHover} from "../../components/ButtonHover";

export const SixthSection = () => {
    return (
        <div className='home_page-sixth-section'>
            <div className='home_page-sixth-section-box'>
                <div className='home_page-sixth-section-title'>
                    <h3>
                        Spot frustratingly slow pages across device types with performance monitoring
                    </h3>
                </div>
            </div>
            <div className="home_page-sixth-info-box">
                <div className='home_page-sixth-info-box-first'>
                    <span>
                        According to Google, If your pages take longer than a few seconds to load you’re
                        potentially losing nine out of ten visitors, right out of the gate.
                    </span>
                    <span>
                        Hexometer continuously monitors your website for performance issues across desktop
                        and mobile devices.
                    </span>
                    <div className='home_page-sixth-info-box-first-line-text-box'>
                                <span>
                                    - Check how pages display on up to 8 different device types
                                </span>
                        <span>
                                    - Analyze website performance on desktop and mobile devices
                                </span>
                        <span>
                                    - Monitor page load speed
                                </span>
                        <span>
                                    - Get actionable insights to fix performance issues
                                </span>
                    </div>
                    <span>
                        Troubleshoot performance issues by performing on-demand performance audits featuring
                        Google Web Vitals on any page and monitor your progress through time.
                    </span>
                    <div className='home_page-sixth-section-button'>
                        <ButtonHover text='Get started with our free plan'/>
                    </div>
                </div>
                <div className='home_page-sixth-info-box-second'>
                    <img src={homeimg5} alt="img"/>
                </div>
            </div>
        </div>
    )
}
