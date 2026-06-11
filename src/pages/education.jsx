import { motion } from "framer-motion";
import BackButton from "../components/tempBack.jsx";
import Footer from "../components/tempFooter.jsx";

function Education() {
  const education = [
    {
      year: "2020",
      title: "SSC",
      description: "Completed Secondary School Education."
    },
    {
      year: "2022",
      title: "Intermediate MPC",
      description: "Completed Intermediate with Mathematics, Physics and Chemistry."
    },
    {
      year: "2023 - Present",
      title: "B.Tech CSE (AI & ML)",
      description: "Pursuing B.Tech in Computer Science and Engineering with specialization in AI & ML at SR University."
    },
    {
      year: "Future",
      title: "Software Engineer",
      description: "Aspiring to become a skilled Full Stack and AI Engineer."
    }
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackButton />

      <h1>⏳ Time Machine</h1>

      <p className="subtitle">
        Travel through my educational journey.
      </p>

      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-card">
            <h2>{item.year}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Education;