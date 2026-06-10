import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

function Certifications() {
  const certifications = [
    {
      title: "Cisco NetRiders",
      issuer: "Cisco",
      description:
        "Participated in Cisco NetRiders and strengthened networking fundamentals."
    },
    {
      title: "AI & ML Virtual Internship",
      issuer: "Eduskills",
      description:
        "Completed AI & ML internship focusing on machine learning concepts and applications."
    },
    {
      title: "Web Development",
      issuer: "Various Platforms",
      description:
        "Learned frontend and backend web development technologies."
    },
    {
      title: "Data Science",
      issuer: "Oasis Infobyte",
      description:
        "Worked on data analysis, visualization and predictive modeling projects."
    },
    {
      title: "Machine Learning",
      issuer: "Prodigy InfoTech",
      description:
        "Built machine learning models and explored practical ML workflows."
    }
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackButton />

      <h1>🍞 Memory Bread</h1>

      <p className="subtitle">
        Every certification adds a new slice of knowledge to my journey.
      </p>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h2>{cert.title}</h2>

            <h4>{cert.issuer}</h4>

            <p>{cert.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Certifications;