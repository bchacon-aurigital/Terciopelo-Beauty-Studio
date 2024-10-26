// pages/Cards.js
"use client";
import React from "react";
import FlippingCard from "./flipping-card";
import "../globals.css";

const Cards = () => {
  const cardData = [
    {
      frontImage: "/Images/card-front1.avif",
      backImage: "/Images/card-back1.avif",
      title: "análisis capilar",
      description:
        "Todas las sesiones incluyen una valoración de tu salud capilar por medio de una microcámara de diagnóstico. Así tendremos toda la información para cuidar tu cabello de la forma correcta.",
    },
    {
      frontImage: "/Images/card-front2.avif",
      backImage: "/Images/card-back2.avif",
      title: "corte de cabello",
      description:
        "Cada corte incluye lavado, mascarilla y peinado. Trabajo con las referencias que traigas, mientras te guío según tu estructura facial para asegurarte el mejor resultado posible.",
    },
    {
      frontImage: "/Images/card-front3.avif",
      backImage: "/Images/card-back3.avif",
      title: "cambio de color",
      description:
        "Desde babylights sutiles hasta color global completo. Al trabajar con las mejores técnicas lograremos el tono y estilo que mejor se adapte a tu personalidad y preferencias.",
    },
    {
      frontImage: "/Images/card-front4.avif",
      backImage: "/Images/card-back4.avif",
      title: "tratamientos",
      description:
        "Te ayudaré a solucionar cualquier problema capilar gracias a tratamientos de alta calidad. Con productos como el Detox Oway o el ácido hialurónico revitalizaremos tu cabello, dejándolo más fuerte, saludable y lleno de vida.",
    },
    {
      frontImage: "/Images/card-front5.avif",
      backImage: "/Images/card-back5.avif",
      title: "peinado profesional",
      description:
        "Desde ondas elegantes hasta un recogido sofisticado, crearé el peinado perfecto para cualquier ocasión. Ya sea que busques un look casual o algo más formal, me aseguraré de que resalte tu estilo y te haga sentir increíble.",
    },
    {
      frontImage: "/Images/card-front6.avif",
      backImage: "/Images/card-back6.avif",
      title: "maquillaje",
      description:
        "Una limpieza facial para tu tipo de piel, seguida de un maquillaje impecable y un sellador especial que repele la humedad, el sudor e incluso el agua. Ideal para manatener un maquillaje  perfecto todo el día.",
    },
  ];

  return (
    <div className="py-[9%] px-[8%]">
      <div className="text-center py-[8%]">
        <h1 className="text-[20px] md:text-[45px] lg:text-[47px] text-[#B880B5] leading-[35px] md:leading-[60px] lg:leading-[80px]">
          De un cabello sin vida y difícil de manejar, a una suavidad de
          terciopelo
        </h1>
        <p className="text-[18px] md:text-[25px] lg:text-[30px] leading-[25px] md:leading-[33px] lg:leading-[40px] mb-4 font-afacad ">
          En Terciopelo Beauty, abordamos estos problemas desde la raíz. MI
          enfoque está centrado en la salud capilar y en crear estilos
          personalizados. Para que hagas de tu cabello tu mejor accesorio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[58px] py-14">
          {cardData.map((card, index) => (
            <div key={index} className="w-full min-w-[327px]">
              <FlippingCard
                frontImage={card.frontImage}
                backImage={card.backImage}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center space-x-4 lg:space-y-0 lg:space-x-4">
          <button className="bg-brownBtn/[83] hover:bg-brownGradient w-full  max-w-[284px] h-[73px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[13px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[32px] ">
            <img
              src="/Icons/agenda-icon.svg"
              className="w-[30px] h-[30px] md:w-auto md:h-auto"
              alt="agenda-icon"
            />
            AGENDA UNA CITA
          </button>
          <button className="bg-[#B880B5] hover:bg-[#a767a4] w-full max-w-[284px] h-[73px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[13px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[32px] ">
            <img
              src="/Icons/eye (1).svg"
              className="w-[30px] h-[30px] md:w-auto md:h-auto"
              alt="eye-icon"
            />
            COTIZA UN CAMBIO DE COLOR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
