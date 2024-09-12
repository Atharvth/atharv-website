import React from "react";
import "./style.css";
import {
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import earthlinkLogo from "../../assets/images/earthlink.png"; // Renamed to avoid conflict
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTiktok />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.earthlink && (
          <li>
            <a href={socialprofils.earthlink}>
              <img src={earthlinkLogo} alt="EarthLink Logo" className="earthlink-logo" />
            </a>
          </li>
        )}
      </ul>
      <p>Connect With Us</p>
    </div>
  );
};

