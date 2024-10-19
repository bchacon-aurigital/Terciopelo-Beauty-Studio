import Image from "next/image";

const HomePage = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(65% 65% at 50% 52.59%, #735383 0%, #413345 100%)",
      }}
      className="min-h-screen text-white"
    >
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-10">
        <div className="flex items-center space-x-3 w-[90px] max-w-[153px] h-[90px] max-h-[153px]">
          <img src={"/Images/logo.png"} alt="Logo" className="h-full w-full" />
          {/* <h1 className="text-2xl font-bold">TercioPelo</h1> */}
        </div>
        <nav className="flex space-x-[25px] items-center text-[19px] leading-[24px]">
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
          <button className="bg-brownBtn text-white px-[16px] py-[10px] rounded-[10px]">
            Agenda una cita
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row justify-center  items-end ">
        <div className="lg:w-1/2 text-center lg:text-left py-20 px-10">
          <h2 className="text-[80px] leading-[100px]">
            DONDE LA SALUD CAPILAR Y EL ESTILO SE ENCUENTRAN
          </h2>
          <p className="mt-6 text-[20px] leading-[35px] font-afacad">
            Tu cabello es una expresión única de personalidad y estilo. Con el
            uso de tratamientos capilares personalizados para todo tipo de
            cabello, Terciopelo Beauty te ofrece una experiencia de lujo que
            garantiza un cabello suave, sedoso, y saludable.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-brownBtn/[83] w-[284px] h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[30px] leading-[32px] ">
              <img src="/Icons/agenda-icon.svg" />
              AGENDA UNA CITA
            </button>
            <button className="bg-purpleBtn/50 w-[284px] h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[30px] leading-[32px] ">
              <img src="/Icons/eye (1).svg" />
              COTIZA UN CAMBIO DE COLOR
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={"/Images/hero-image.avif"}
            alt="Hero Image"
            className="rounded-lg w-full h-full"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
