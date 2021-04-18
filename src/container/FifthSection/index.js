import React from 'react'
import homeimg4 from "../../assets/images/home_img4.png"

export const FifthSection = () => {
    return (
        <div className='home_page-fifth-section'>
            <div className='home_page-fifth-section-box'>
                <div className='home_page-fifth-section-title'>
                    <h3>
                        Ensure a great first impression on every device with UX monitoring
                    </h3>
                </div>
            </div>
            <div className="home_page-fifth-info-box">
                <div className='home_page-fifth-info-box-first'>
                    <img src={homeimg4} alt="img"/>
                </div>
                <div className='home_page-fifth-info-box-second'>
                            <span>
                                First impressions matter, a lot. If your visitors encounter spelling mistakes
                                or visual bugs their first visit will be their last.
                            </span>
                    <span>
                                Hexometer works like your very own QA team, continuously monitoring your most
                                important pages for user experience issues.
                            </span>
                    <span>
                                Catch spelling or grammar mistakes left unnoticed within your pages and curate
                                your own personal dictionary of terms.
                            </span>
                    <span>
                                Hexometer also tests your pages across seven different device types to ensure your
                                pages are not only mobile-friendly but display as intended.
                            </span>
                    <span>
                                Troubleshoot UX issues by performing on-demand user experience reports and monitor
                                your progress through time.
                            </span>
                </div>
            </div>
        </div>
    )
}
