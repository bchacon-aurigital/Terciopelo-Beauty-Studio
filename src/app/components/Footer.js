import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative footer-gradient overflow-hidden text-white py-10 px-6">
      <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-0 items-start text-center md:text-left">
        {/* Quote Section */}
        <div className="z-20 flex flex-col items-center md:items-start mb-6 w-full lg:max-w-[60%] md:mb-0">
          <img
            src="/Icons/logo-footer.svg"
            className="w-[70%] mx-auto h-auto mb-14 lg:hidden"
          />
          <p className="text-[35px] lg:text-[50px] leading-[60px] font-light italic ">
            "LA ENERGÍA MÁS PODEROSA QUE PUEDES EJERCER ES LA DE REINVENTARTE A
            TI MISMO."
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-4 text-2xl">
            <img src="/Icons/Instagram.svg" className="cursor-pointer" />
            <img src="/Icons/Tiktok.svg" className="cursor-pointer" />
            <img src="/Icons/Whatsapp.svg" className="cursor-pointer" />
            <img src="/Icons/Waze.svg" className="cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div className=" w-full flex flex-col items-center gap-[30px]">
          {/* Site Links */}
          <div className="w-full flex justify-start space-x-8 text-sm font-light">
            <div>
              <h3 className="font-semibold mb-[20px]">SITIO</h3>
              <ul className="space-y-[20px]">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Estudio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Proceso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-[20px]">SOCIAL</h3>
              <ul className="space-y-[20px]">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>

            {/* Actions Links */}
            <div>
              <h3 className="font-semibold mb-[20px]">ACCIONES</h3>
              <ul className="space-y-[20px]">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Agenda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Cotiza
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/Icons/logo-footer.svg"
            className="w-full h-auto hidden lg:block"
          />
          <img
            src="/Images/footer-tarot.avif"
            className=" absolute -bottom-[30%] left-[20%] lg:-bottom-[80%] lg:left-[5%] z-10 max-w-[650px] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}