import React, { useEffect, useRef, useState } from "react";

const CalendarWidget = () => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState("600px"); // Ajuste inicial de altura

  useEffect(() => {
    const handleIframeLoad = () => {
      const updateIframeHeight = () => {
        if (iframeRef.current) {
          try {
            const iframeContent = iframeRef.current.contentWindow;
            const docHeight = iframeContent.document.documentElement.scrollHeight;
            const bodyHeight = iframeContent.document.body.scrollHeight;
            const height = Math.max(docHeight, bodyHeight) + 100; // Ajuste de margen adicional
            setIframeHeight(`${height}px`);
            iframeRef.current.style.height = `${height}px`;
          } catch (e) {
            setIframeHeight("600px");
            iframeRef.current.style.height = "600px";
          }
        }
      };

      setTimeout(updateIframeHeight, 1000);
      window.addEventListener("resize", updateIframeHeight);

      return () => {
        window.removeEventListener("resize", updateIframeHeight);
      };
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleIframeLoad);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", handleIframeLoad);
      }
    };
  }, []);

  return (
    <div id="Agenda" className="w-full min-h-screen pt-[4vh] flex justify-center items-center">
      <div className="max-w-[1000px] w-full rounded-xl bg-white shadow-lg p-8 text-center">
        <h1 className="text-2xl lg:text-[48px] font-levaus  leading-[35px] lg:leading-[80px] text-[#C293C2]">
          RESERVA UN ESPACIO EN LA AGENDA PARA CUIDARTE Y TRANSFORMARTE
        </h1>
        <p className="text-[18px] lg:text-[24px]  mt-4 mb-8  font-Vollkorn">
          No esperes más para darle a tu cabello el cuidado que deseas. Estamos listos para escucharte, asesorarte y crear un look que refleje tu esencia, asegurando que salgas de nuestro salón sintiéndote más seguro y espectacular que nunca.
        </p>
        <div className="w-full rounded-xl overflow-hidden" style={{ height: iframeHeight }}>
          <iframe
            src="https://bookings.gettimely.com/terciopelobeauty/bb/book"
            className="w-full"
            scrolling="no"
            id="timelyWidget"
            ref={iframeRef}
            style={{ border: "none", width: "100%", maxWidth: "1024px", height: iframeHeight }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
