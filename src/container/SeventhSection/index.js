import React from 'react'
import homeimg6 from "../../assets/images/home_img6.png"

export const SeventhSection = () => {
    return (
        <div className='home_page-seventh-section'>
            <div className='home_page-seventh-section-box'>
                <div className='home_page-seventh-section-title'>
                    <h3>
                        Catch errors before they affect your customers with health monitoring
                    </h3>
                </div>
            </div>
            <div className="home_page-seventh-info-box">
                <div className='home_page-seventh-info-box-first'>
                    <img src={homeimg6} alt="img"/>
                </div>
                <div className='home_page-seventh-info-box-second'>
                            <span>
                                Website updates went wrong, server issues or 3rd party services experiencing problems
                                are like kryptonite for your business. Causing pages, links, images or key
                                functionality such as your shopping cart not to work.
                            </span>
                    <span>
                                Hexometer continuously monitors your website for broken links, server errors,
                                JS errors, missing images or problematic scripts that can sabotage your business.
                            </span>
                    <span>
                                Troubleshoot issues by performing on-demand page audits to uncover JS errors,
                                W3C issues, server errors. Monitor your progress through time and get detailed
                                debugging information to pinpoint or fix problems.
                            </span>
                </div>
            </div>
        </div>
    )
}
