import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { styles } from "../styles";
import { bwmap, worldmap } from "../assets";

const SocialMediaIcons = () => (
  <nav aria-label="Social profiles" className="relative z-20 flex items-center gap-2 mt-3 mb-5">
    <a href="https://www.linkedin.com/in/tshepo-shale/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex w-9 h-9 items-center justify-center shrink-0 text-eerieBlack hover:text-battleGray">
      <FontAwesomeIcon icon={faLinkedin} className="text-[20px]" />
    </a>
    <a href="https://github.com/TshepoShale?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex w-9 h-9 items-center justify-center shrink-0 text-eerieBlack hover:text-battleGray">
      <FontAwesomeIcon icon={faGithub} className="text-[20px]" />
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative flex flex-col w-full min-h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-x-clip">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img src={bwmap} alt="" className="hidden sm:block w-full h-full object-cover" />
      <img src={worldmap} alt="" className="block sm:hidden w-full h-full object-cover" />
    </div>

    <div className={`relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start gap-3 ${styles.paddingX} pt-24 sm:pt-32 lg:pt-28 xl:pt-36 pb-16`}>
      <div className="flex flex-col justify-center items-center mt-5 ml-3">
        <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
        <div className="w-1 h-40 bw-gradient sm:hidden" />
      </div>
      <div className="flex flex-col min-w-0 max-w-full">
        <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
          Tshepo{" "}
          <span className="sm:text-battleGray sm:text-[80px] text-eerieBlack text-[45px] font-mova font-extrabold uppercase">
            Thoriso Shale
          </span>
        </h1>
        <p className="mt-3 text-eerieBlack font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] max-w-[550px]">
          Strategic Development Consultant. Project Manager.{" "}
          <br className="sm:block hidden" />
          Avid Problem-Solver. Solutions Driven.
        </p>
        <SocialMediaIcons />
      </div>
    </div>

    <div className="relative z-10 w-full flex justify-center items-center mt-auto pb-10">
      <a href="#about" aria-label="Scroll to About section">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2">
          <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-taupe mb-1" />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
