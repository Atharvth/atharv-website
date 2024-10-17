import React from 'react';
import './style.css';
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaSnapchatGhost, FaDiscord, FaTwitch, FaGithub,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SUMMARY</h3>
          <p>Software Engineer skilled in Python, Java, and web development. Gained hands-on experience as backend engineer intern at Shell, enhancing their CI/CD pipeline and increasing their unit test coverage. Have experience in refactoring legacy code and resolving security issues. Seeking full-time software engineering role to contribute to innovative projects.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://instagram.com/ne_gfx"><FaInstagram /></a>
          <a href="https://github.com/Atharvth"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/atharvth/"><FaLinkedin /></a>
        </div>
        <p>ATHARV P. THAKER</p>
      </div>
    </footer>
  );
};

export default Footer;
