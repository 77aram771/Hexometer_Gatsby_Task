import React, {useState} from 'react'
import r1 from '../assets/images/r1.png'
import {Icon} from '@iconify/react'
import arrowLeft from '@iconify-icons/akar-icons/arrow-left'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'
import {Carousel3DData} from "../share/mockData";

export const Carousel3D = () => {
    const leng = 3
    const [numSlid, setNumSlid] = useState(1)

    const onSlide = (count) => {
        setNumSlid(previousCount => count === 1 ? previousCount === leng ? 1 : previousCount + count : previousCount === 1 ? leng : previousCount + count)
    }

    const add = (numImg, count) => {
        return (numImg + count > leng) ? (numImg + count - leng) : numImg + count
    }

    const sub = (numImg, count) => {
        return (numImg - count < 1) ? (numImg - count + leng) : numImg - count
    }

    const changeClass = (slide, img) => {
        if (slide === img) {
            return 'center'
        }
        if (add(slide, 1) === img) {
            return 'left'
        }
        if (sub(slide, 1) === img) {
            return 'right'
        }
    }

    return (
        <div className="carousel3d">
            <div id="slider">
                <img src={r1} className={`relative-img`} alt="alternative" style={{width: '100%'}}/>
                {Carousel3DData.map((item, index) => (
                    <div key={index} onClick={() => alert('test')} rel="nofollow">
                        <img
                            id={`slide${index + 1}`}
                            src={item.img}
                            className={`slide ${changeClass(numSlid, index + 1)}`}
                            alt={`review ${index + 1}`} style={{width: '100%'}}
                        />
                    </div>
                ))}
            </div>
            <div className="left-btn" onClick={() => onSlide(-1)}><Icon icon={arrowLeft} color='#fff'/></div>
            <div className="right-btn" onClick={() => onSlide(1)}><Icon icon={arrowRight} color='#fff'/></div>
        </div>
    )
}
