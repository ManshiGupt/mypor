import React from "react";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/data";

const Experience = () => {
  const twoCards = workExperience.slice(0, 2);
  const remainingCards = workExperience.slice(2);

  return (
    <section className="mb-24 px-4 md:px-8 lg:px-12 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Work Experience
      </h1>

      {/* First two cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {twoCards.map((card, index) => (
          <Button key={index} className="w-full">
            <div className="flex items-center gap-4 p-4 rounded-lg">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-sm text-gray-300 mt-1">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Remaining cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {remainingCards.map((card, index) => (
          <Button key={index} className="w-full">
            <div className="flex items-center gap-4 p-4 rounded-lg">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-sm text-gray-300 mt-1">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
