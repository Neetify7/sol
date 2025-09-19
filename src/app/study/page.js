import "../assets/css/main.css";
import "../assets/css/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGamepad, faTools } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <div>
        <iframe src="./study/loader/home"></iframe>
      
        <nav>
          <a onclick=""><FontAwesomeIcon icon={faHouse} /></a>
          <a onclick=""><FontAwesomeIcon icon={faGamepad} /></a>
          <a onclick=""><FontAwesomeIcon icon={faTools} /></a>
          <a onclick=""><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://github.com/Neetify7/sol" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        </nav>
      
        <script src="/assets/js/main.js"></script>
      </div>
    </>
  );
}