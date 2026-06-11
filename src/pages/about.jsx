import { motion } from "framer-motion";
import BackButton from "../components/tempBack.jsx";
import profile from "../assets/profile.jpg";
import Footer from "../components/tempFooter.jsx";

function About() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton />

      <div className="about-card">

        <img
          src={profile}
          alt="Profile"
          className="profile-img"
        />

        <h1>Diddi Krishna Sathwika</h1>

        <h3>AI & ML Student | MERN Stack Developer</h3>

        <p>
          I am currently pursuing B.Tech in Computer Science and Engineering
          with specialization in Artificial Intelligence and Machine Learning
          at SR University.
        </p>

        <p>
          I am passionate about Web Development, Machine Learning,
          Deep Learning, Computer Vision and building innovative
          software solutions that solve real-world problems.
        </p>

        <p>
          My goal is to become a skilled software engineer capable of
          developing impactful applications using modern technologies.
        </p>

      </div>
      <Footer />
    </motion.div>
  );
}

export default About;