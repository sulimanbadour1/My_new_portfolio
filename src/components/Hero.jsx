import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import Fighter from "./Fighter/Fighter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto
    flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center  mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white dark:text-gray-700`}
          >
            Hi, I'm <span className="text-[#915eff]">Suliman</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 mb-12 z-10 text-white-100 dark:text-gray-700`}
          >
            I am a front-end developer <br className="sm:block hidden" /> a
            product designer and a design engineer.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className=" xs:bottom-24 xs:flex flex-col xs:justify-center xs:items-center absolute right-1/4  ">
        <Fighter />
      </div> */}

      <div className="absolute xs:bottom-12 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 dark:border-white">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 dark:bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
