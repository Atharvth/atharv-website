import React from "react";
import { FaTwitter, FaLink } from "react-icons/fa"; // Importing icons from react-icons

const PortfolioItem = ({ data }) => (
  <div className="card rounded-lg border-0 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div
      style={{
        backgroundImage: `url(${data.img})`, // Use the image URL directly
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
      }}
      className="rounded-t-lg"
    ></div>
    <div className="bg-black/60 text-white p-4 rounded-b-lg">
      <h3 className="text-lg sm:text-xl font-bold">{data.name}</h3>
      <p className="text-sm sm:text-base">{data.title}</p>
      <div className="flex justify-center space-x-4 mt-4">
      <a
          href={data.other_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaLink className="text-lg" />
        </a>
        <a
          href={data.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaTwitter className="text-lg" />
        </a>
      </div>
    </div>
  </div>
);

export default PortfolioItem;

