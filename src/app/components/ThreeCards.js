import Image from "next/image";

export default function ThreeCards() {
  const cards = [
    {
      title: "Cuidado Personalizado",
      imageSrc: "/Icons/benefit-icon1.svg",
    },
    {
      title: "Salud Garantizada",
      imageSrc: "/Icons/benefit-icon2.svg",
    },
    {
      title: "Estilo Impecable",
      imageSrc: "/Icons/benefit-icon3.svg",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-6 items-center justify-items-center mx-auto mt-4 lg:mt-12 max-w-screen-xl">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-[#2D033B] text-white rounded-lg shadow-lg p-4 w-full sm:w-60 md:w-80 text-center relative overflow-hidden ${
            index === 2 ? "col-span-2 lg:col-span-1 w-[45%]" : ""
          }`}
          style={{
            backgroundImage: "url('/Images/bg-stars.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 opacity-80" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-[18px] sm:text-[24px] md:text-[30px] font-semibold px-12 sm:px-6 md:px-9">{card.title}</h3>
            <img src={card.imageSrc} alt={card.title} className="mb-4 hidden lg:block" />
          </div>
        </div>
      ))}
    </div>
  );
}
