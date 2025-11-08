import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbacksCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white p-10 rounded-3xl xs:w-[320px] w-full shadow-lg"
  >
    <p className="text-black text-[48px] font-bold">"</p>
    <div className="mt-1">
      <p className="text-black tracking-wider text-[14px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[14px]">
            <span className="text-green-500">@</span>
            {name}
          </p>
          <p className="mt-1 text-gray-600 text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={
            image ||
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          }
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-green-200 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
