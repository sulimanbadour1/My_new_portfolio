import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { slideIn } from "../utils/motion";

const FeedbackCard = ({
  name,
  testimonial,
  company,
  image,
  designation,
  feedback,
  index,
}) => (
  <motion.div
    variants={slideIn("", "tween", 0.2, 1)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full dark:bg-indigo-100"
  >
    <p className="text-white font-black text-[48px] dark:text-gray-800">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] dark:text-gray-900">
        {testimonial}
      </p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px] dark:text-gray-900 dark:font-medium">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px] dark:text-gray-500">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by_${name}`}
          className="w-10 h-10 rounded-full image-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] dark:bg-transparent">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] dark:bg-indigo-200`}
      >
        <motion.div>
          <p className={styles.sectionSubText}>What my clients say about me</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 
      pb-14 flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
