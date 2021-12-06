import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import Wave from "./Wave";
//Animation
import { motion } from "framer-motion";
import { titleAnim, container, Img } from "../animation";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <Wave />
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={container}>
          Contact us for any photograpyh or videography ideas that you have. We
          have professsionals with amazing skills.
        </motion.p>
        <motion.button variants={container}>
          <Link to="/contact">Contact Us</Link>
        </motion.button>
      </Description>

      <Image>
        <motion.img variants={Img} src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};
