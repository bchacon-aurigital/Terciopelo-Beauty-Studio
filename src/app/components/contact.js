import React from "react";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Images/bg-stars.avif')" }}
      className="py-[8%] lg:py-[5%] px-[13%] lg:lg:px-[8%] bg-cover bg-fixed"
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
      <div className="text-white mt-40 ">
        <div className="text-center mb-24">
          <h1 className="text-[48px]">
            Así es como se aseguran resultados espectaculares en Terciopelo
            Beauty
          </h1>
          <p className="text-[19px] leading-[35px]">
            Confiar en un nuevo salón es un gran paso, por eso mi enfoque es
            claro y directo, para que cada cliente disfrute de un servicio
            impecable.
          </p>
        </div>
        <div className="space-y-14">
          <div className="flex justify-end">
            <div className="steps-gradient relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[83px] w-[83px] flex items-center justify-center -top-12 right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                I
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Consulta inicial
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]">
                Escucho tus deseos y necesidades para entender el estado de tu
                cabello y el estilo que quieres lograr.
              </p>
            </div>
          </div>
          <div className="flex justify-start text-end">
            <div className="even-steps-gradient relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[83px] w-[83px] flex items-center justify-center -top-12 left-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                II
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Análisis capilar profundo
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]">
                Continúo un microanálisis capilar para entender la salud de tu
                cabello, asegurando que cualquier tratamiento sea seguro y
                efectivo.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="steps-gradient relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[83px] w-[83px] flex items-center justify-center -top-12 right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                III
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Plan personalizado
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]">
                Construyo un plan de acción adaptado a ti, incluyendo
                recomendaciones de corte, tinte, o tratamientos según tu tipo de
                cabello.
              </p>
            </div>
          </div>
          <div className="flex justify-start text-end">
            <div className="even-steps-gradient relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[83px] w-[83px] flex items-center justify-center -top-12 left-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                IV
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Ejecución precisa
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]">
                Me aseguro de trabajar con cuidado y excelente técnica para
                asegurar que el resultado final supere tus expectativas.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="steps-gradient relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[83px] w-[83px] flex items-center justify-center -top-12 right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                V
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Seguimiento y cuidado
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]">
                Finalizo con consejos y productos para mantener tu look y la
                salud de tu cabello hasta tu próxima visita.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center space-x-4 lg:space-y-0 lg:space-x-4">
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

export default Contact;
