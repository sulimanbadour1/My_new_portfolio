import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col dark:bg-indigo-300 dark:bg-opacity-90"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center dark:text-gray-700 dark:text-opacity-90">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] dark:text-gray-700">
        I'm a front-end developer and product designer driven by a deep passion
        for the art of crafting web applications and staying at the forefront of
        emerging technologies. My journey involves mastering tools like
        React.js, Angular, Next.js, Tailwind CSS, and other modern web
        technologies. With each project, I bring innovation and creativity to
        the forefront, shaping the digital landscape with elegance and
        precision.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
