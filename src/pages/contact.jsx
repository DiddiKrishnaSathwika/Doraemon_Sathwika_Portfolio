import { motion } from "framer-motion";
import BackButton from "../components/tempBack.jsx";
import Footer from "../components/tempFooter.jsx";

function Contact() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackButton />

      <h1>📞 Time Telephone</h1>

      <p className="subtitle">
        Let's connect and build something amazing together.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>yourmail@example.com</p>
        </div>

        <div className="contact-card">
          <h2>💼 LinkedIn</h2>
          <p>linkedin.com/in/yourprofile</p>
        </div>

        <div className="contact-card">
          <h2>💻 GitHub</h2>
          <p>github.com/yourusername</p>
        </div>

        <div className="contact-card">
          <h2>📄 Resume</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

      </div>

      <div className="contact-form">
        <h2>Send a Message</h2>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button>Send Message 🚀</button>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Contact;