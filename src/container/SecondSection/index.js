import React from 'react'
import Carousel from "react-grid-carousel"
import rightArrow from "../../assets/icon/arrowRight-icon.png"
import leftArrow from "../../assets/icon/arrowLeft-icon.png"
import {ratingPartner, ServicesSupport} from "../../share/mockData"
import {Icon} from "@iconify/react"
import starFilled from "@iconify-icons/ant-design/star-filled"
import {Carousel3D} from "../../components/Carousel3D"
import styled from "styled-components"

const ArrowBtn = styled.span`
  display: inline-block;
  position: absolute;
  right: ${({type}) => (type === 'right' ? '-10px' : 'unset')};
  left: ${({type}) => (type === 'left' ? '-10px' : 'unset')};
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  top: 35%;
  width: 30px;
  height: 30px;
  background-image: url(${props => props.img});
  background-size: cover;
`

export const SecondSection = () => {
    return (
        <div className='home_page-second-section'>
            <div className='home_page-second-section-box'>
                <div className='home_page-second-section-title'>
                    <h2>
                        Trusted by 15,000+ businesses & compatible with over 100+ platforms
                    </h2>
                </div>
                <div className='home_page-second-section-carousel-box'>
                    <Carousel
                        cols={5}
                        rows={1}
                        gap={1}
                        loop
                        containerStyle={{width: '100%'}}
                        arrowRight={<ArrowBtn type="right" img={rightArrow}/>}
                        arrowLeft={<ArrowBtn type="left" img={leftArrow}/>}
                    >
                        {ServicesSupport.map(item => (
                            <Carousel.Item key={item.id} className='carousel-item'>
                                <img src={item.img} alt='icon' />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className='home_page-second-section-rating-box'>
                    <div className='home_page-second-section-rating-box-left'>
                        {ratingPartner.map(item => {
                            return (
                                <div className='home_page-second-section-rating-item' key={item.id}>

                                    <div className='home_page-second-section-rating-item-stars'>
                                        <div className='home_page-second-section-rating-item-info'>
                                            <img src={item.img} alt="icon"/>
                                            <span>{item.rating}/5</span>
                                        </div>
                                        <div className='icons'>
                                            <Icon icon={starFilled} color='#f3ad16' width={26}/>
                                            <Icon icon={starFilled} color='#f3ad16' width={26}/>
                                            <Icon icon={starFilled} color='#f3ad16' width={26}/>
                                            <Icon icon={starFilled} color='#f3ad16' width={26}/>
                                            <Icon icon={starFilled} color='#f3ad16' width={26}/>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='home_page-second-section-rating-box-right'>
                        <Carousel3D/>
                    </div>
                </div>
            </div>
        </div>

    )
}
