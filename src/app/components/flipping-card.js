// components/FlippingCard.js
import React, { useState } from "react";
import "../globals.css"; // Corrected import statement

const FlippingCard = ({ frontImage, backImage, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card relative w-full h-72 perspective transition-transform duration-500`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`inner-card w-full h-full transform transition-transform duration-300 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="face front">
          <img
            src={frontImage}
            alt="Front"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${backImage})` }}
          className="face back flex flex-col justify-center items-center text-white p-10 rounded-lg relative"
        >
          <h3 className="text-center text-[#ECDA98] text-[18px] leading-[30px] mb-3 font-semibold">
            {title}
          </h3>
          <div className="relative flex items-center justify-center">
            <p className="text-center text-[17px] leading-[30px] mb-4">
              {" "}
              {/* Added mb-4 for spacing */}
              {description}
            </p>
            <span className="bg-[#ECDA98] w-[65%] mx-auto h-[1px] absolute bottom-0"></span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
