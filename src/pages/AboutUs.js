//Page Componentes
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSections } from "../components/FaqSections";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUS = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSections />
    </motion.div>
  );
};
export default AboutUS;
