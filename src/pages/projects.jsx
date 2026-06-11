import { motion } from "framer-motion";
import BackButton from "../components/tempBack.jsx";
import Footer from "../components/tempFooter.jsx";

function Projects() {
  const projects = [
    {
      title: "Doraemon Portfolio",
      description:
        "A Doraemon-themed interactive portfolio built using React, showcasing skills, education, projects and achievements through futuristic gadgets.",
      tech: "React, CSS, JavaScript"
    },
    {
      title: "Plant Disease Detection",
      description:
        "AI-powered system using MobileNet to detect plant diseases from leaf images.",
      tech: "Python, TensorFlow, MobileNet"
    },
    {
      title: "Crop Yield Prediction",
      description:
        "Machine learning system for predicting crop yields using agricultural data.",
      tech: "Python, Scikit-Learn, Streamlit"
    },
    {
      title: "Lung Cancer Detection",
      description:
        "CNN-based web application for classifying lung cancer from CT scan images.",
      tech: "Deep Learning, CNN, Flask"
    },
    {
      title: "Wellness Bot",
      description:
        "Mental wellness assistant that helps users track emotions and provides supportive guidance.",
      tech: "MERN Stack"
    },
    {
      title: "Anti-Doping Gamified Quiz",
      description:
        "Interactive educational platform that spreads awareness about anti-doping rules through gamification.",
      tech: "C Programming"
    }
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackButton />

      <h1>🔬 Innovation Lab</h1>

      <p className="subtitle">
        Experiments, innovations and real-world projects from my journey.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span className="tech-stack">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Projects;