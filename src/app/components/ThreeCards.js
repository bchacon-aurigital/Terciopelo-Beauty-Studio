import Image from "next/image";

export default function ThreeCards() {
  const cards = [
    {
      title: "Cuidado Personalizado",
      imageSrc: "/Icons/benefit-icon1.svg", // Add the actual path to your icons
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
    <div className="grid  sm:grid-cols-3 ml-[6%] 2xl:ml-[10%] px-10 gap-4 2xl:p-10 items-center justify-center  mt-8 mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#2D033B] text-white rounded-lg shadow-lg p-6 w-80 text-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/Images/bg-stars.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 opacity-80" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-[30px] font-semibold px-9">{card.title}</h3>
            <img src={card.imageSrc} alt={card.title} className="mb-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
