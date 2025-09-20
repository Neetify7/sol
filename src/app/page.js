'use client'
import "./assets/css/study.css";

export default function Home() {
  return (
    <>
      <div className="center">
        <h1>Pen Academy</h1>
        <p>a academy for school enthusiasts alike</p>
        <br></br>
        <a href="/study" className="closed"><p>CLOSED BETA</p></a>
        <br></br>
        <br></br>
        <div className="group">
          <div className="pill"><p>Rich Content</p></div>
          <div className="pill"><p>Extensive Tests</p></div>
          <div className="pill"><p>Progress Tracking</p></div>
        </div>
        <br></br>
        <a href="https://github.com/Neetify7/sol" target="_blank">upstream code</a>
      </div>
    </>
  );
}