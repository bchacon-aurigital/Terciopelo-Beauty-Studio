import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Quote Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="text-lg font-light italic max-w-xs md:max-w-sm">
            "LA ENERGÍA MÁS PODEROSA QUE PUEDES EJERCER ES LA DE REINVENTARTE A
            TI MISMO."
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-4 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Tiktok" className="hover:text-gray-300">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Whatsapp" className="hover:text-gray-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm font-light">
          {/* Site Links */}
          <div>
            <h3 className="font-semibold mb-2">SITIO</h3>
            <ul className="space-y-1">
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
            <h3 className="font-semibold mb-2">SOCIAL</h3>
            <ul className="space-y-1">
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
            <h3 className="font-semibold mb-2">ACCIONES</h3>
            <ul className="space-y-1">
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
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-6">
        <h1 className="text-4xl font-bold text-yellow-400">TERCIOPELO</h1>
      </div>
    </footer>
  );
}
