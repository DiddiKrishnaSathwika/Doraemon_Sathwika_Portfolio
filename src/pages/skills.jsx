import BackButton from "../components/BackButton";
import "../styles/Skills.css";
import copter from "../assets/gadgets/take-copter.png";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="page skills-map">
      <BackButton />

      <h1>🍃 Take-Copter Skills Journey</h1>

      <div className="skill-island programming">
        <h2>💻 Programming</h2>
        <div className="skill">C</div>
        <div className="skill">Java</div>
        <div className="skill">Python</div>
      </div>

      <div className="skill-island web">
        <h2>🌐 Web Development</h2>
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">JavaScript</div>
        <div className="skill">React</div>
        <div className="skill">Node.js</div>
        <div className="skill">Express.js</div>
      </div>

      <div className="skill-island ai">
        <h2>🤖 AI & ML</h2>
        <div className="skill">Machine Learning</div>
        <div className="skill">Deep Learning</div>
        <div className="skill">TensorFlow</div>
        <div className="skill">Keras</div>
        <div className="skill">OpenCV</div>
        <div className="skill">Artificial Intelligence</div>
      </div>

      <div className="skill-island database">
        <h2>🗄️ Database & Tools</h2>
        <div className="skill">SQL</div>
        <div className="skill">MongoDB</div>
        <div className="skill">Git</div>
        <div className="skill">GitHub</div>
        <div className="skill">Flask</div>
      </div>
      {/* <svg className="skill-routes">
  <path
    d="M220 450 Q450 150 700 180"
    className="route"
  />

  <path
    d="M700 180 Q1000 250 1250 450"
    className="route"
  />

  <path
    d="M1250 450 Q900 650 700 700"
    className="route"
  />
</svg> */}
      <motion.img
  src={copter}
  alt="Take Copter"
  className="copter"
  animate={{
    x: [0, 450, 900, 450],
    y: [0, -300, 0, 300]
  }}
  transition={{
    duration: 12,
    times: [0, 0.3, 0.7, 1],
    ease: "easeInOut"
  }}
/>
    </div>
  );
}

export default Skills;