"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "./components/sidebar";

const HomePage = () => {
  const [open, isOpen] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    // Ensure we're in the browser before adding the event listener
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const planet1Style = {
    transform: `translate(${
      (mousePosition.x -
        (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
      10
    }px, ${
      (mousePosition.y -
        (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
      10
    }px)`,
  };
  const planet2Style = {
    transform: `translate(${
      (mousePosition.x -
        (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
      7
    }px, ${
      (mousePosition.y -
        (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
      7
    }px)`,
  };
  const planet3Style = {
    transform: `translate(${
      (mousePosition.x -
        (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
      5
    }px, ${
      (mousePosition.y -
        (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
      5
    }px)`,
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(65% 65% at 50% 52.59%, #735383 0%, #413345 100%)",
      }}
      className="min-h-screen relative text-white overflow-hidden"
    >
      {/* Header */}
      <header className=" z-50 py-6 px-4 md:px-7 lg:px-10">
        <div className="flex justify-between items-center w-full">
          <div className="hidden sm:flex items-center space-x-3 w-[90px] max-w-[153px] h-[90px] max-h-[153px]">
            <img
              src={"/Images/logo.png"}
              alt="Logo"
              className="h-full w-full"
            />
          </div>

          <nav className="hidden lg:flex space-x-[25px] items-center text-[19px] leading-[24px]">
            <a href="#services" className="hover:underline">
              Servicios
            </a>
            <a href="#studio" className="hover:underline">
              Estudio
            </a>
            <a href="#process" className="hover:underline">
              Proceso
            </a>
            <a href="#testimonials" className="hover:underline">
              Testimonios
            </a>
            <button className="bg-brownBtn hover:bg-brownGradient text-white px-[16px] py-[10px] rounded-[10px]">
              Agenda una cita
            </button>
          </nav>
          <div className="flex lg:hidden items-end justify-end w-full">
            <button onClick={() => isOpen(true)} className="">
              <img src="/Icons/hamburguer-menu.svg" />
            </button>
          </div>
        </div>
        {/* for small devices only */}
        <div className="flex sm:hidden items-center justify-center w-full h-[70px] ">
          <img src={"/Icons/logo.svg"} alt="Logo" className="h-full w-[70px]" />
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row justify-center items-center relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left py-6 md:py-12 lg:py-20 px-10">
          <h2 className="text-[27px] md:text-[50px] lg:text-[80px] leading-[40px] md:leading-[70px] lg:leading-[100px]">
            DONDE LA SALUD CAPILAR Y EL ESTILO SE ENCUENTRAN
          </h2>
          <p className="mt-3 md:mt-6 text-[15px] leading-[20px] md:text-[20px] md:leading-[35px] font-afacad">
            Tu cabello es una expresión única de personalidad y estilo. Con el
            uso de tratamientos capilares personalizados para todo tipo de
            cabello, Terciopelo Beauty te ofrece una experiencia de lujo que
            garantiza un cabello suave, sedoso, y saludable.
          </p>
          <div className="mt-8 grid grid-cols-2  space-x-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-brownBtn/[83] hover:bg-brownGradient w-full max-w-[284px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[13px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[32px] ">
              <img
                src="/Icons/agenda-icon.svg"
                className="w-[30px] h-[30px] md:w-auto md:h-auto"
              />
              AGENDA UNA CITA
            </button>
            <button className="bg-purpleBtn/50 hover:bg-purpleGradient w-full max-w-[284px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px]  text-[13px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[32px] ">
              <img
                src="/Icons/eye (1).svg"
                className="w-[30px] h-[30px] md:w-auto md:h-auto"
              />
              COTIZA UN CAMBIO DE COLOR
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-0 md:mt-5 lg:mt-0">
          <img
            src={"/Images/hero-image.avif"}
            alt="Hero Image"
            className="rounded-lg w-full h-full"
          />
        </div>
      </main>
      <Sidebar isOpen={isOpen} open={open} />

      {/* Absolute Images */}
      <div
        className="absolute -z-0 inset-0 hidden lg:flex justify-center items-center h-full"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="absolute top-[20%] left-[60%] transform -translate-x-1/2"
          style={{ ...planet1Style }}
        >
          <img src="/Images/planet1.avif" alt="Planet 1" />
        </div>
        <div
          className="absolute top-[40%] right-0 transform translate-x-1/2 translate-y-1/2"
          style={{ ...planet2Style }}
        >
          <img src="/Images/planet2.avif" alt="Planet 2" />
        </div>
        <div
          className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ ...planet3Style }}
        >
          <img src="/Images/planet3.avif" alt="Planet 3" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
