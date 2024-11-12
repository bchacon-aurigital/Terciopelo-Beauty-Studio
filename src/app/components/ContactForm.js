import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hairLength: "",
    techniques: [],
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTechniqueChange = (technique) => {
    setFormData((prev) => {
      if (prev.techniques.includes(technique)) {
        return {
          ...prev,
          techniques: prev.techniques.filter((t) => t !== technique),
        };
      } else {
        return {
          ...prev,
          techniques: [...prev.techniques, technique],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("hairLength", formData.hairLength);
    formData.techniques.forEach((technique, index) => {
      formPayload.append(`technique_${index}`, technique);
    });

    if (selectedFile) {
      formPayload.append("file", selectedFile);
    }

    emailjs
      .sendForm(
        "service_cspzdp9",
        "template_3tavogq",
        e.target,
        "QQnBhytnVo7HZMzV1"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: "url('/Images/bg-stars.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`fixed flex flex-col justify-center ${
        isModalOpen ? "right-0" : "-right-[1500px]"
      } top-0 h-screen z-50 md:w-1/2 py-5 duration-300 px-10 2xl:p-10 rounded-lg shadow-lg backdrop-blur-md bg-opacity-70`}
    >
      {/* Botón de cierre en la esquina superior derecha */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 left-4 text-white text-4xl font-bold hover:text-pink-500 transition-colors"
        style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
      >
        &times;
      </button>

      <img src="/Icons/logo.svg" className="h-12 w-12 mx-auto my-4" />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 2xl:space-y-6">
            <div>
              <label className="block text-white mb-1">Nombre Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full text-sm px-4 py-1 2xl:py-2 bg-transparent text-white border-b border-l border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-sm px-4 py-2 bg-transparent text-white border-b border-l border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-3 text-lg font-semibold">
                Técnicas de Color
              </label>
              <div className="space-y-1 2xl:space-y-2">
                {[
                  "Balayage",
                  "Highlights",
                  "Color Block",
                  "Fantasia",
                  "Money Peace",
                  "Highlights MoneyPeace",
                  "Tinte Completo",
                  "Cubrimiento de Canas",
                ].map((technique, index) => (
                  <label
                    key={index}
                    htmlFor={`checkbox-${index}`}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="hidden peer"
                      onChange={() => handleTechniqueChange(technique)}
                    />
                    <div className="w-4 2xl:w-5 h-4 2xl:h-5 border-2 border-white rounded-sm peer-checked:bg-pink-600 flex items-center justify-center">
                      <svg
                        className="hidden w-2 2xl:w-3 h-2 2xl:h-3 text-white peer-checked:block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-white text-xs">{technique}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-3 2xl:mt-5">
              <label className="block text-white mb-1">
                Agrega una fotografía de referencia
              </label>
              <div className="">
                <label
                  htmlFor="file-upload"
                  className="mt-2 p-2 rounded-[10px] text-white cursor-pointer transition-colors"
                  style={{
                    border: "2px solid",
                    borderImageSource:
                      "linear-gradient(97.01deg, #b880b5 3.23%, #e49539 95.58%)",
                    borderImageSlice: 1,
                  }}
                >
                  Adjuntar
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <button
                  style={{
                    border: "2px solid",
                    borderImageSource:
                      "linear-gradient(97.01deg, #b880b5 3.23%, #e49539 95.58%)",
                    borderImageSlice: 1,
                    borderRadius: "10px",
                  }}
                  className="mt-2 p-2 rounded-[10px] text-white transition-colors"
                >
                  instrucciones
                </button>
              </div>
              {selectedFile && (
                <p className="text-white text-sm mt-2">
                  Archivo seleccionado: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-4 2xl:space-y-6">
            <div>
              <label className="block text-white mb-1">Número Telefónico</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full text-sm px-4 py-1 2xl:py-2 bg-transparent text-white border-b border-l border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-1">
                Selecciona el Largo de tu Cabello
              </label>
              <div className="w-full space-y-1 2xl:space-y-2">
                {[
                  { label: "Corto", imageUrl: "/Images/1.avif" },
                  { label: "Medio", imageUrl: "/Images/2.avif" },
                  { label: "Largo", imageUrl: "/Images/3.avif" },
                  { label: "Extralargo", imageUrl: "/Images/4.avif" },
                ].map((length, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, hairLength: length.label })
                    }
                    className="flex gap-1 2xl:gap-3 w-full items-center p-1 2xl:p-2 rounded-lg text-white button-gradient transform transition-transform"
                  >
                    <div className="w-[50px] 2xl:w-[80px] h-[50px] 2xl:h-[80px] overflow-hidden mb-1 rounded-full border-2 border-pink-600">
                      <img
                        src={length.imageUrl}
                        alt={length.label}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-sm">{length.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              style={{
                border: "2.5px solid",
                borderImageSource:
                  "linear-gradient(97.01deg, #b880b5 3.23%, #e49539 95.58%)",
                borderImageSlice: 1,
                borderRadius: "10px",
              }}
              className=" h-[98px] flex gap-3 items-center text-[30px] mt-5 p-3 bg-[#B880B580]/60 text-white transition-colors"
            >
              <img src="/Icons/eye (1).svg" className="hidden lg:block w-[60px] h-auto" />
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
