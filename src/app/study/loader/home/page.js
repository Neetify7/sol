import "../../../assets/css/main.css";
import ParticleBackground from "../../../assets/js/particles.js"

export default function Home() {
  return (
    <>
      <div>
        <ParticleBackground />
        <div className="center">
            <h1>sol</h1>
        </div>
      </div>
    </>
  );
}