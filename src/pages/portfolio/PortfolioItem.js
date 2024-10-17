// PortfolioItem.js

import React from "react";
import { FaLink } from "react-icons/fa"; // Importing the link icon

const PortfolioItem = ({ data }) => (
  <div className="card rounded-lg border-0 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div
      style={{
        backgroundImage: `url(${data.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
      }}
      className="rounded-t-lg"
    ></div>
    <div className="bg-black/60 text-white p-4 rounded-b-lg">
      <h3 className="text-lg sm:text-xl font-bold">{data.name}</h3>
      <p className="text-sm sm:text-base mt-2">{data.description}</p>
      {data.link ? (
        <div className="flex justify-center mt-4">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaLink className="text-2xl" />
          </a>
        </div>
      ) : (
        <p className="mt-4 text-gray-400 italic">Link not available</p>
      )}
    </div>
  </div>
);

export default PortfolioItem;
