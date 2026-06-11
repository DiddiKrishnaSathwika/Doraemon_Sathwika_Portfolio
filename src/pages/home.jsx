import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import doraemon from "../assets/doraemon.png";
import Footer from "../components/tempFooter.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <div className="doraemon-section">
          <img
            src={doraemon}
            alt="Doraemon"
            className="doraemon-image"
          />
        </div>

        <div className="content-section">
          <h1>Welcome to Doraemon's Future World</h1>

          <h2>Diddi Krishna Sathwika</h2>

          <p>
            Hello! I am Doraemon.
            Welcome to the futuristic portfolio of
            Diddi Krishna Sathwika.
          </p>

          <p>
            Open my pocket and explore education,
            skills, projects, experience,
            certifications, achievements and contact information
            through futuristic gadgets.
          </p>

          <button
            className="open-pocket-btn"
            onClick={() => navigate("/pocket")}
          >
            Open Pocket
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;