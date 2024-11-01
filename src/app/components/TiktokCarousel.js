import React, { useState } from "react";

const tiktokVideos = [
  { id: 1, image: "/path-to-image1.jpg", label: "Mullet" },
  {
    id: 2,
    image: "/path-to-image2.jpg",
    label: "Definamos esos rebeldes rizos",
  },
  { id: 3, image: "/path-to-image3.jpg", label: "Ginger hair" },
  { id: 4, image: "/path-to-image4.jpg", label: "Butterfly" },
  // Add more as needed
];

const TiktokCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tiktokVideos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tiktokVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[300px] h-[450px] flex overflow-hidden">
        {tiktokVideos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={video.image}
              alt={video.label}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-red-600 text-white px-2 py-1 rounded">
              {video.label}
            </div>
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
        >
          &#10094;
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-4">
        {tiktokVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TiktokCarousel;
