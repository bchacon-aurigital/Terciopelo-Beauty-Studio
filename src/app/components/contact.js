import React from "react";

const Contact = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <div
      id="studio"
      style={{ backgroundImage: "url('/Images/bg-stars.avif')" }}
      className="py-[8%] lg:py-[5%] px-[13%] lg:lg:px-[8%] bg-cover bg-fixed"
    >
      <div className="flex flex-col lg:flex-row text-center lg:items-end gap-[40px] justify-center items-center">
        <div className="space-y-10 text-white max-w-[800px] w-full">
          <h1 className="text-2xl lg:text-[48px] leading-[35px] lg:leading-[80px]">
            un lugar ideado para que explores el estilo que refleja tu esencia.
          </h1>
          <p className="text-[18px] lg:text-[24px] leading-[34px] lg:leading-[40px] mb-4 font-Vollkorn">
            Hola! Soy Nicolle Pity, fundadora de Terciopelo Beauty. He creado
            este espacio pensando en ti, en tus necesidades y en la importancia
            de sentirte realmente espectacular con tu cabello. En este salón, no
            solo se trata de peinar o cortar; se trata de ofrecerte un lugar
            seguro donde puedas elegir el estilo que refleje lo mejor de ti y te
            haga sentir increible.
          </p>
          <div className="rounded-[10px] hidden lg:block h-[200px] w-[85%] overflow-hidden border=[#ECDA98] border-2 mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.707304126917!2d-84.06858842403952!3d9.958292490145022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e58846e0fb53%3A0xc23b75751d5a4681!2sTerciopelo%20Beauty%20Studio!5e0!3m2!1ses!2scr!4v1730997251038!5m2!1ses!2scr" className="w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="min-w-[30%] max-w-[400px] lg:max-w-none">
          <img src="/Images/studio.avif" className="w-full max-h-[750px]" />
        </div>
        <div className="rounded-[10px] lg:hidden h-[200px] w-full max-w-[800px] overflow-hidden border=[#ECDA98] border-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.707304126917!2d-84.06858842403952!3d9.958292490145022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e58846e0fb53%3A0xc23b75751d5a4681!2sTerciopelo%20Beauty%20Studio!5e0!3m2!1ses!2scr!4v1730997251038!5m2!1ses!2scr" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>


      <div id="process" className="text-white mt-20 lg:mt-40">
        <div className="text-center mb-24">
          <h1 className="text-2xl lg:text-[48px] mb-4 leading-[35px] lg:leading-[80px]">
            Así es como se aseguran resultados espectaculares en Terciopelo
            Beauty
          </h1>
          <p className="text-[18px] lg:text-[24px] leading-[20px] font-Vollkorn">
            Confiar en un nuevo salón es un gran paso, por eso mi enfoque es
            claro y directo, para que cada cliente disfrute de un servicio
            impecable.
          </p>
        </div>
        <div className="space-y-14">
          <div className="flex justify-end">
            <div className="steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 right-6 lg:right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                I
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Consulta inicial
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px] font-Vollkorn">
                Escucho tus deseos y necesidades para entender el estado de tu
                cabello y el estilo que quieres lograr.
              </p>
            </div>
          </div>
          <div className="flex justify-start text-end">
            <div className="even-steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 left-6 lg:left-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                II
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Análisis capilar profundo
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]  font-Vollkorn">
                Continúo un microanálisis capilar para entender la salud de tu
                cabello, asegurando que cualquier tratamiento sea seguro y
                efectivo.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 right-6 lg:right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                III
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Plan personalizado
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]  font-Vollkorn">
                Construyo un plan de acción adaptado a ti, incluyendo
                recomendaciones de corte, tinte, o tratamientos según tu tipo de
                cabello.
              </p>
            </div>
          </div>
          <div className="flex justify-start text-end">
            <div className="even-steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 left-6 lg:left-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                IV
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Ejecución precisa
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]  font-Vollkorn">
                Me aseguro de trabajar con cuidado y excelente técnica para
                asegurar que el resultado final supere tus expectativas.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white  absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 right-6 lg:right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                V
              </span>
              <h3 className="text-[20px] md:text-[25px] lg:text-[32px]">
                Seguimiento y cuidado
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px]  font-Vollkorn">
                Finalizo con consejos y productos para mantener tu look y la
                salud de tu cabello hasta tu próxima visita.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-14 lg:mt-24 flex items-center justify-center space-x-4 lg:space-y-0 lg:space-x-4">
          <button
            onClick={() => document.getElementById("Agenda").scrollIntoView({ behavior: "smooth" })}
            className="bg-brownBtn/[83] hover:bg-brownGradient w-full  max-w-[284px] h-[73px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[13px] md:text-[20px] 2xl:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[20px] xl:leading-[30px] font-[600]">
            <img
              src="/Icons/agenda-icon.svg"
              className="w-[30px] h-[30px] md:w-auto md:h-auto"
              alt="agenda-icon"
            />
            AGENDA UNA CITA
          </button>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="bg-[#B880B5] hover:bg-[#a767a4] w-full max-w-[284px] h-[73px] lg:h-[133px] text-white flex items-center px-3 py-3 rounded-[15px] text-[13px] md:text-[20px] 2xl:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[20px] xl:leading-[30px] font-[600]"
          >
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
