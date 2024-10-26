import React from "react";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Images/bg-stars.avif')" }}
      className="py-[8%] lg:py-[5%] px-[13%] lg:lg:px-[8%] bg-cover"
    >
      <div className="flex flex-col md:flex-row text-center lg:items-end gap-[40px]">
        <div className="space-y-10 text-white">
          <h1 className="text-[20px] md:text-[45px] lg:text-[47px] leading-[35px] md:leading-[60px] lg:leading-[80px]">
            un lugar ideado para que explores el estilo que refleja tu esencia.
          </h1>
          <p className="text-[18px] md:text-[25px] lg:text-[30px] leading-[25px] md:leading-[33px] lg:leading-[40px] mb-4 font-afacad ">
            Hola! Soy Nicolle Pity, fundadora de Terciopelo Beauty. He creado
            este espacio pensando en ti, en tus necesidades y en la importancia
            de sentirte realmente espectacular con tu cabello. En este salón, no
            solo se trata de peinar o cortar; se trata de ofrecerte un lugar
            seguro donde puedas elegir el estilo que refleje lo mejor de ti y te
            haga sentir increible.
          </p>
          <div className="rounded-[10px] hidden lg:block h-[200px] w-[85%] mx-auto overflow-hidden  border=[#ECDA98] border-2">
            <img
              src="/Images/map-lg.png"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="min-w-[40%]">
          <img src="/Images/studio.avif" />
        </div>
        <div className="rounded-[10px] lg:hidden h-[200px] w-full mx-auto overflow-hidden  border=[#ECDA98] border-2">
          <img
            src="/Images/map-lg.png"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
