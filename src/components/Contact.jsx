import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF03dgtEjFlrfRQssR4ATp18YUgM7yv8o",
  authDomain: "tshepo-shale-portfolio.firebaseapp.com",
  projectId: "tshepo-shale-portfolio",
  storageBucket: "tshepo-shale-portfolio.appspot.com",
  messagingSenderId: "1055644814737",
  appId: "1:1055644814737:web:c2405c9101b0fdea1ede30",
  measurementId: "G-H2RKB5CKV3"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const captchaValue = recaptchaRef.current.getValue();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA challenge.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_uu7aoat",
        "template_gw06l5i",
        {
          from_name: form.name,
          to_name: "Tshepo",
          from_email: form.email,
          to_email: "tshale0603@gmail.com",
          message: form.message,
        },
        "Ck4wctXWJH-xgZXoW"
      );

      // Save form data to Firebase
      await addDoc(collection(db, "contactEntries"), {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
      recaptchaRef.current.reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          className="mt-10 flex flex-col gap-6 font-poppins relative"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={"bg-eerieBlack py-4 px-6 " +
                         "placeholder:text-taupe text-timberWolf " +
                         "rounded-lg outline-none border-none font-medium"}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={"bg-eerieBlack py-4 px-6 " +
                         "placeholder:text-taupe text-timberWolf " +
                         "rounded-lg outline-none border-none font-medium"}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className={"bg-eerieBlack py-4 px-6 " +
                         "placeholder:text-taupe text-timberWolf " +
                         "rounded-lg outline-none border-none font-medium resize-none"}
            />
          </label>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeoAnEpAAAAAKmV9oRHwVImz_5qjF5n1saHYxG4"
            size="normal"
            onChange={(token) => console.log("reCaptcha token: ", token)}
          />

          <button
            type="submit"
            className={"live-demo flex justify-center sm:gap-4 " +
                       "gap-3 sm:text-[20px] text-[16px] text-timberWolf " +
                       "font-bold font-beckman items-center py-5 " +
                       "whitespace-nowrap sm:w-[130px] sm:h-[50px] " +
                       "w-[100px] h-[45px] rounded-[10px] bg-night " +
                       "hover:bg-battleGray hover:text-eerieBlack " +
                       "transition duration-[0.2s] ease-in-out"}
          >
            {loading ? "Sending" : "Send"}
            <img
              src={loading ? sendHover : send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
