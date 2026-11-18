import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { styles } from "../styles";
import { bwmap, worldmap } from "../assets";

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-3 mt-3">
      <a
        href="https://www.linkedin.com/in/tshepo-shale/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-grey" />
      </a>
      <a
        href="https://github.com/TshepoShale?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="text-grey" />
      </a>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className="relative flex sm:flex-row flex-col w-full min-h-screen mx-auto 
      sm:bg-hero bg-hero-mobile overflow-hidden"
    >
      {/* 1. Fluid Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src={bwmap}
          alt="world map background"
          className="w-full h-full hidden sm:block object-cover object-center"
        />
        <img
          src={worldmap}
          alt="world map background"
          className="w-full h-full block sm:hidden object-cover object-center"
        />
      </div>

      {/* 2. Main Content Container */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between gap-3 
        pt-[150px] sm:pt-[200px] lg:pt-[250px] ${styles.paddingX}`}
      >
        {/* Decorative Line (Mobile only) */}
        <div className="flex flex-col justify-center items-center mt-5 ml-3">
          <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
          <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] flex flex-col justify-center pb-20">
          <h1
            className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
          >
            Tshepo{" "}
            <span
              className="text-battleGray sm:text-eerieBlack font-mova font-extrabold uppercase leading-tight block mt-2"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.6rem)" }}
            >
              Thoriso Shale
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-eerieBlack max-w-xl>`}
            Strategic Development Consultant. Project Manager.{" "}
            <br className="sm:block hidden" />
            Avid Problem-Solver. Solutions Driven.
          </p>
          <SocialMediaIcons />
        </div>
      </div>

      {/* 3. Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-taupe mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;