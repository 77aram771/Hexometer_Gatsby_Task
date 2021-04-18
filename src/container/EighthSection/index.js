import React from 'react'
import homeimg7 from "../../assets/images/home_img7.png";

export const EighthSection = () => {
    return (
        <div className='home_page-eighth-section'>
            <div className='home_page-eighth-section-box'>
                <div className='home_page-eighth-section-title'>
                    <h3>
                        Optimize for optimal SERP rankings with SEO monitoring
                    </h3>
                </div>
            </div>
            <div className="home_page-eighth-info-box">
                <div className='home_page-eighth-info-box-first'>
                        <span>
                            No more out of date SEO audits, Hexometer continuously monitors your website for SEO issues
                            that can impact your search engine performance highlighting problems and opportunities.
                        </span>
                    <span>
                            Hexowatch keeps an eye on a wide range of factors including:
                        </span>
                    <div className='home_page-eighth-info-box-first-line-text-box'>
                        <div className='home_page-eighth-info-box-first-line-text-box-left'>
                                <span>
                                    - Title and description meta tags
                                </span>
                            <span>
                                    - Duplicate content issues
                                </span>
                            <span>
                                    - Broken links
                                </span>
                        </div>
                        <div className='home_page-eighth-info-box-first-line-text-box-right'>
                                <span>
                                    - Header Structure
                                </span>
                            <span>
                                    - Sitemap issues
                                </span>
                            <span>
                                    - Opengraph optimizations
                                </span>
                        </div>
                    </div>
                    <span>
                           Hexometer integrates with Google Search Console to provide page performance metrics and
                           ranking metrics.
                        </span>
                    <span>
                            Troubleshoot SEO issues by performing on-demand performance audits and monitor your
                            progress through time.
                        </span>
                </div>
                <div className='home_page-eighth-info-box-second'>
                    <img src={homeimg7} alt="img"/>
                </div>
            </div>

        </div>
    )
}
