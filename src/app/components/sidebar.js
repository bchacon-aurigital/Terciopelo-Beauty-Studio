import Link from "next/link";
// import bg from "../../../public/Images/bg-hamburguer.avif";
const Sidebar = ({ open, isOpen, setIsModalOpen, isModalOpen }) => {
  return (
    <div
      className={`fixed duration-500 z-[500] top-0 bottom-0 ${
        open === true ? "right-0" : "-right-[1500px]"
      } w-full md:w-1/2 h-full bg-cover bg-no-repeat`}
      style={{ backgroundImage: 'url("/Images/bg-hamburguer.avif")' }}
    >
      <div className="flex relative flex-col items-center justify-center h-full p-6 text-white">
        <button
          onClick={() => isOpen(false)}
          className="self-end text-2xl absolute top-10 left-8"
        >
          <img src="/Icons/close-icon.svg" />
        </button>
        <div className="flex flex-col items-center gap-8 mt-8 text-xl font-light tracking-widest">
          <button href="#servicios">
            <img src="/Icons/Waze.svg" />
          </button>
          <button href="#servicios">
            <a className="hover:text-purple-300">SERVICIOS</a>
          </button>
          <button href="#estudio">
            <a className="hover:text-purple-300">ESTÚDIO</a>
          </button>
          <button href="#proceso">
            <a className="hover:text-purple-300">PROCESO</a>
          </button>
          <button href="#testimonios">
            <a className="hover:text-purple-300">TESTIMONIOS</a>
          </button>
          <div className="mt-8 grid grid-cols-2  space-x-4 lg:space-y-0 lg:space-x-4 ">
            <button className="bg-brownBtn/[83] hover:bg-brownGradient w-full max-w-[284px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px] text-[13px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[32px] ">
              <img
                src="/Icons/agenda-icon.svg"
                className="w-[30px] h-[30px] md:w-auto md:h-auto"
              />
              AGENDA UNA CITA
            </button>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="bg-purpleBtn/50 hover:bg-purpleGradient w-full max-w-[284px] lg:h-[133px] text-white flex items-center px-6 py-3 rounded-[15px]  text-[13px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[22px] lg:leading-[32px] "
            >
              <img
                src="/Icons/eye (1).svg"
                className="w-[30px] h-[30px] md:w-auto md:h-auto"
              />
              COTIZA UN CAMBIO DE COLOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
