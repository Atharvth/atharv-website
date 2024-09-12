import React from 'react';
import './style.css';
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaSnapchatGhost, FaDiscord, FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MAIN MENU</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/academy">Academy</a></li>
            <li><a href="/roster">Roster</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/newsroom">Newsroom</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <p>Sign up to our newsletter to receive exclusive offers.</p>
          <form>
            <input type="email" placeholder="E-mail" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>ABOUT</h3>
          <p>Elite Esports was founded in 2018. Elite is best known for our Tier 1 competitive placements in esports, content and digital tournament hosting. Elite is currently the second highest ranked Fortnite team in North America. Elite is headquartered in New York, New York and has a global following.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://youtube.com"><FaYoutube /></a>
          <a href="https://tiktok.com"><FaTiktok /></a>
          <a href="https://snapchat.com"><FaSnapchatGhost /></a>
          <a href="https://discord.com"><FaDiscord /></a>
          <a href="https://twitch.tv"><FaTwitch /></a>
        </div>
        <p>© COPYRIGHT 2024 - ELITE ESPORTS</p>
      </div>
    </footer>
  );
};

export default Footer;
