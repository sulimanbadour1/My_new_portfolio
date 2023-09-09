import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { youtube, github } from "../assets";
import { SectionWrapper } from "../hoc";

import { projects, projectsengineer } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full dark:bg-indigo-100 dark:bg-opacity-70"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={youtube}
                alt="youtube"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px] dark:text-gray-800">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] dark:text-gray-700">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>My 3D Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", ",0.1", 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] dark:text-gray-700 dark:text-opacity-80"
        >
          I have worked as a Design Engineer in the field of 3D Printing,
          CAD/CAE and Robotics, and have designed and developed various 3D
          models and prototypes.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projectsengineer.map((project, index) => (
          <ProjectCard index={index} key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
