import React from 'react'
import homeimg1 from "../../assets/images/hom_img1.png"
import homeimg2 from "../../assets/images/home_img2.png"
import {InfoData} from "../../share/mockData"
import {Icon} from "@iconify/react"
import randomIcon from "@iconify-icons/el/random"

export const ThirdSection = () => {
    return (
        <div className='home_page-third-section'>
            <div className='home_page-third-section-box'>
                <div className='home_page-third-section-title'>
                    <h2>
                        Designed for your eCommerce business, loved by agencies
                    </h2>
                </div>
            </div>
            <div className='home_page-third-section-info-box'>
                <div className='home_page-third-section-info-box-first'>
                    <div className='home_page-third-section-info-box-first-left'>
                                <span>
                                    Your website is how the world sees your business. But If that first impression
                                    is a slow or broken website, that first visit will be their last.
                                </span>
                        <span>
                                    Unlike traditional uptime monitoring platforms that just tell you when your website
                                    is down, Hexometer is like having your very own QA team, continuously monitoring
                                    your website across six core areas including availability, performance,
                                    user experience, health, SEO, and security. Get real-time notifications
                                    when issues are detected via email, SMS, Slack, Telegram & Trello.
                                </span>
                        <span>
                                    Hexometer works in the cloud, there is no software to install,
                                    or code changes required - You can get started in minutes to get comprehensive,
                                    sitewide, peace of mind.
                                </span>
                    </div>
                    <div className='home_page-third-section-info-box-first-right'>
                        <img src={homeimg1} alt="img"/>
                    </div>
                </div>
                <div className='home_page-third-section-info-box-second'>
                    <div className='home_page-third-section-info-box-second-left'>
                                <span>
                                    Our platform is also designed to support and empower agencies so they
                                    can keep an eye on client websites, get alerts as soon as issues arise,
                                    protect ad-campaigns and provide world-class service.
                                </span>
                        <img src={homeimg2} alt="img"/>
                    </div>
                    <div className='home_page-third-section-info-box-second-right'>
                        {
                            InfoData.map(item => {
                                return (
                                    <div
                                        key={item.id}
                                        className='home_page-third-section-info-box-second-right-item'
                                    >
                                        <Icon icon={randomIcon} color={'red'}/>
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
