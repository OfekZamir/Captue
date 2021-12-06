//Page Componentes
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSections } from "../components/FaqSections";
import { motion } from "framer-motion";
import { aboutPageAnim } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUS = () => {
  return (
    <motion.div
      variants={aboutPageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <FaqSections />
    </motion.div>
  );
};
export default AboutUS;
