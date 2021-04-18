import React from 'react'
import homeimg3 from "../../assets/images/home_img3.png"

export const FourthSection = () => {
    return (
        <div className='home_page-fourth-section'>
            <div className='home_page-fourth-section-box'>
                <div className='home_page-fourth-section-title'>
                    <h3>
                        Never miss a beat with next-gen 24/7 availability monitoring
                    </h3>
                </div>
            </div>
            <div className='home_page-fourth-info-box'>
                <div className='home_page-fourth-info-box-first'>
                            <span>
                                Go beyond traditional uptime monitoring. Hexometer provides 24/7 peace of mind
                                by continuously monitoring your entire website for issues.
                            </span>
                    <span>
                                For up to the minute peace of mind you can also deploy additional standalone monitors
                                to keep an eye on your most important pages down to the minute.
                            </span>
                    <span>
                                Standard monitors enable you to monitor any URL for uptime and HTTP response time down
                                to the minute. This is ideal to monitor important landing pages, email servers,
                                CDN, DNS, SFTP, RADIUS, POP3, IMAP and 3rd party services for downtime.
                            </span>
                    <span>
                                Advanced monitors enable you to deploy keyword, page speed performance or transaction
                                monitors to ensure your most important pages or flows are working optimally.
                            </span>
                </div>
                <div className='home_page-fourth-info-box-second'>
                    <img src={homeimg3} alt="img"/>
                </div>
            </div>
        </div>
    )
}
