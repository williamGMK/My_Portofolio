import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-black-100 p-6 rounded-2xl max-w-md mx-auto"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">
              Your Message
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-2.5 px-6 rounded-lg outline-none w-fit text-white font-semibold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[320px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
