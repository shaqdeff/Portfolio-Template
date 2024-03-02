import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { info } from 'autoprefixer';

const InfoTile = (props) => {
    const [showInfo, setShowInfo] = useState(false);

      // Don't show the more info div when the project tile changes
    useEffect(() => {
        // This code will run whenever the 'active' state changes
        setShowInfo(false) 
    }, [props.active]);

    return (
        <>
            { /*!showInfo &&*/ 
                <button
                    className="absolute sm:-bottom-[30px] -bottom-[20px] live-demo flex justify-center 
                    text-[12px] sm:text-[14px] text-eerieBlack
                    font-bold font-beckman items-center
                    whitespace-nowrap sm:w-[90px] sm:h-[30px] 
                    w-[50px] h-[20px] rounded-[10px] glassmorphism2 
                    sm:mt-[22px] mt-[16px] hover:bg-battleGray 
                    hover:text-timberWolf transition duration-[0.2s] 
                    ease-in-out"

                    // onClick={() => window.open(demo, '_blank')}
                    onClick={() => setShowInfo(!showInfo)}
                    onMouseOver={() => {
                        document
                        .querySelector('.btn-icon')
                    }}
                    onMouseOut={() => {
                        document
                        .querySelector('.btn-icon')
                    }}>
                        {showInfo ? '▲' : '▼'}
                        {showInfo && (
                    <div className="my-4 rounded-md bg-black text-white">
                        {/* Content inside the div */}
                        {props.info}
                    </div>
                    )}
                </button>
            }
        </>
    )
}

export default InfoTile