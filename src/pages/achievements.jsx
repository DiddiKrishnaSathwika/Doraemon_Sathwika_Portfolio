import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

function Achievements() {
  const achievements = [
    {
      title: "Cisco NetRiders Participation",
      description:
        "Participated in Cisco NetRiders competition and strengthened networking knowledge."
    },
    {
      title: "Technical Workshops",
      description:
        "Actively attended workshops related to AI, ML, Web Development and emerging technologies."
    },
    {
      title: "Project Development",
      description:
        "Successfully built multiple projects in AI/ML, Web Development and Computer Vision."
    },
    {
      title: "Innovation Challenges",
      description:
        "Participated in technical competitions and innovation-focused events."
    },
    {
      title: "Internships",
      description:
        "Completed internships in AI, Machine Learning and Data Science domains."
    },
    {
      title: "Continuous Learning",
      description:
        "Consistently improving technical skills through certifications, courses and hands-on projects."
    }
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackButton />

      <h1>📺 Time Television</h1>

      <p className="subtitle">
        A glimpse into the memorable milestones of my journey.
      </p>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Achievements;