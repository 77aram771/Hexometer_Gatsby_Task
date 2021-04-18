import React from 'react'
import hexometeticon from "../../assets/icon/hexometet-icon.svg"
import teliocn from "../../assets/icon/tel-icon.svg"
import googleiocn from "../../assets/icon/google-icon.svg"
import slackiocn from "../../assets/icon/slack-icon.svg"
import wordpressiocn from "../../assets/icon/wordpress-icon.svg"
import piocn from "../../assets/icon/p-icon.png"
import webiocn from "../../assets/icon/web-icon.svg"
import zapiocn from "../../assets/icon/zap-icon.png"
import gmailicon from "../../assets/icon/gmail-icon.svg"
import trelloiocn from "../../assets/icon/trello-icon.svg"
import dociocn from "../../assets/icon/doc-icon.svg"

export const TenthSection = () => {
    return (
        <div className='home_page-tenth-section'>
            <div className='home_page-tenth-section-box'>
                <div className='home_page-tenth-section-title'>
                    <h2>
                        Software Integrations
                    </h2>
                    <p>
                        Get alerts via email, SMS, Telegram, Slack Trello or integrate with 1000 apps via
                        our Zapier, Integrately, SyncSpider or Pabbly Connect integrations
                    </p>
                </div>
            </div>
            <div className='home_page-tenth-section-box-info'>
                <div className='home_page-tenth-section-box-info-center'>
                    <img src={hexometeticon} alt='icon' width={100}/>
                </div>
                <div className='home_page-tenth-section-box-info-icons'>
                    <div className='icon tel-box'>
                        <img src={teliocn} alt="icon" width={44}/>
                        <span>Telegram</span>
                    </div>
                    <div className='icon google-box'>
                        <img src={googleiocn} alt="icon" width={44}/>
                        <span>Chrome</span>
                    </div>
                    <div className='icon slack-box'>
                        <img src={slackiocn} alt="icon" width={44}/>
                        <span>Slack</span>
                    </div>
                    <div className='icon wordpress-box'>
                        <img src={wordpressiocn} alt="icon" width={44}/>
                        <span>WP</span>
                    </div>
                    <div className='icon p-box'>
                        <img src={piocn} alt="icon" width={44}/>
                        <span>Pabbly</span>
                    </div>
                    <div className='icon web-box'>
                        <img src={webiocn} alt="icon" width={44}/>
                        <span>Webhook</span>
                    </div>
                    <div className='icon zep-box'>
                        <img src={zapiocn} alt="icon" width={44}/>
                        <span>Zapier</span>
                    </div>
                    <div className='icon gmail-box'>
                        <img src={gmailicon} alt="icon" width={44}/>
                        <span>Gmail</span>
                    </div>
                    <div className='icon trello-box'>
                        <img src={trelloiocn} alt="icon" width={44}/>
                        <span>Trello</span>
                    </div>
                    <div className='icon doc-box'>
                        <img src={dociocn} alt="icon" width={44}/>
                        <span>Google Sheets</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
