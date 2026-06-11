import { motion } from "framer-motion";
import BackButton from "../components/tempBack.jsx";
import Footer from "../components/tempFooter.jsx";

function Experience() {
  const experiences = [
    {
      title: "MERN Stack Training",
      description:
        "Learning full-stack web development using MongoDB, Express.js, React, and Node.js."
    },
    {
      title: "Java Full Stack Training",
      description:
        "Worked with Java, SQL, web technologies, and backend development concepts."
    },
    {
      title: "Eduskills AIML Virtual Internship",
      description:
        "Gained practical exposure to Artificial Intelligence and Machine Learning concepts."
    },
    {
      title: "Prodigy InfoTech ML Internship",
      description:
        "Worked on Machine Learning projects involving data preprocessing and model development."
    },
    {
      title: "Oasis Infobyte Data Science Internship",
      description:
        "Developed projects involving data analysis, visualization, and predictive modeling."
    }
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackButton />

      <h1>🧵 Time Cloth</h1>

      <p className="subtitle">
        My transformation journey through internships, training, and learning.
      </p>

      <div className="experience-container">
        {experiences.map((item, index) => (
          <div key={index} className="experience-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Experience;