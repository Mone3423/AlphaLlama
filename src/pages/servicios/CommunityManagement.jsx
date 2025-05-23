import React from "react";
import InformacionGeneral from "../InformacionGeneral";
import CommunitySection from "../servicios/Community";
import { FaComments, FaCamera, FaCalendarAlt, FaVideo, FaFacebook, FaBullseye, FaChartLine, FaPhotoVideo } from "react-icons/fa";
import "./CommunityManagement.css";
import PaqueteServicios from "../../components/servicios/PaquetedeServicios";
import HeroServices from "../../components/servicios/HeroServices";
import fondo from "../../assets/mages/P1020096 .jpg";



// Transformamos los paquetes en items para la galería

const paquetesGalleryItems = [
  {
    image: '/images/basic.jpg',  // Asegúrate de tener estas imágenes en tu directorio público
    text: 'BASIC'
  },
  {
    image: '/images/business.jpg',
    text: 'BUSINESS'
  },
  {
    image: '/images/profesional.jpg',
    text: 'PROFESIONAL'
  }
];
const paquetes = [
  {
    titulo: "BASIC",
    precio: "2600 BS",
    detalles: ["Incluye factura"],
    servicios: [
      { icono: <FaBullseye />, titulo: "", },
      { icono: <FaComments />, titulo: "Community Management", descripcion: " Optimización de la página y monitoreo de actividad, tanto en comentarios como en mensajes, de lunes a viernes en horario de oficina" },
      { icono: <FaCamera />, titulo: "Fotografía y Videografía", descripcion: "Creación de contenido para RRSS" },
      { icono: <FaVideo />, titulo: "1 Video Campaña", descripcion: " Video de máximo 30 segundos de buenamcalidad para impluso del negocio" },
      { icono: <FaCalendarAlt />, titulo: "8 Posts al Mes", descripcion: "Los posts serán  subidos de acuerdo a horas específicas y requerimientos según el tipo de negocio" },
      { icono: <FaPhotoVideo />, titulo: "3 Video Stories", descripcion: "Videos de 15 segundos relacionados al negocio" },
      { icono: <FaChartLine />, titulo: "", },
      { icono: <FaFacebook />, titulo: "Portada de Facebook" },

    ],
  },
  {
    titulo: "BUSINESS",
    precio: "3700 BS",
    detalles: ["Alcance 20-22 mil personas", "Incluye factura"],
    servicios: [
      { icono: <FaChartLine />, titulo: "Alcance 20-22 mil personas", descripcion: "" },
      { icono: <FaComments />, titulo: "Community Management", descripcion: " Optimización de la página y monitoreo de actividad, tanto en comentarios como en mensajes, de lunes a viernes en horario de oficina" },
      { icono: <FaBullseye />, titulo: "Configuración de Campañas", descripcion: "Segmentación del público idoneo de  los clientes potenciales para el negocio" },
      { icono: <FaVideo />, titulo: "2 Video Campaña", descripcion: " Video de máximo 30 segundos de buenamcalidad para impluso del negocio" },
      { icono: <FaCamera />, titulo: "Fotografía y Videografía", descripcion: "Creación de contenido para RRSS" },
      { icono: <FaCalendarAlt />, titulo: "12 Posts al Mes", descripcion: "Los posts serán  subidos de acuerdo a horas específicas y requerimientos según el tipo de negocio" },
      { icono: <FaFacebook />, titulo: "Portada de Facebook" },
      { icono: <FaPhotoVideo />, titulo: "6 Video Stories", descripcion: "Videos de 15 segundos relacionados al negocio" },

    ]
  },
  {
    titulo: "PROFESIONAL",
    precio: "4800 BS",
    detalles: ["Alcance 40-50 mil personas", "Incluye factura"],
    servicios: [
      { icono: <FaChartLine />, titulo: "Alcance 40-50 mil personas", descripcion: "" },
      { icono: <FaComments />, titulo: "Community Management", descripcion: " Optimización de la página y monitoreo de actividad, tanto en comentarios como en mensajes, de lunes a viernes en horario de oficina" },
      { icono: <FaBullseye />, titulo: "Configuración de Campañas", descripcion: "Segmentación del público idoneo de  los clientes potenciales para el negocio" },
      { icono: <FaVideo />, titulo: "3 Video Campaña", descripcion: " Video de máximo 30 segundos de buenamcalidad para impluso del negocio" },
      { icono: <FaCamera />, titulo: "Fotografía y Videografía", descripcion: "Creación de contenido para RRSS" },
      { icono: <FaCalendarAlt />, titulo: "16 Posts al Mes", descripcion: "Los posts serán  subidos de acuerdo a horas específicas y requerimientos según el tipo de negocio" },
      { icono: <FaFacebook />, titulo: "Portada de Facebook" },
      { icono: <FaPhotoVideo />, titulo: "8 Video Stories", descripcion: "Videos de 15 segundos relacionados al negocio" }

    ]
  }
];


const CommunityManagement = () => {
  return (
    <div className="contenedor-principal">
      {/* Hero reutilizable */}
      <HeroServices
        titulo="COMMUNITY---MANAGEMENT"
        descripcion="Optimiza tu presencia online con estrategias efectivas."
      
      />
      <section>
      <CommunitySection />
      </section>
      <HeroServices
        titulo="Conoce---nuestros--- paquetes "
        imagenFondo={fondo}
      />
      <section>{/* Sección de paquetes de servicios */}
        {paquetes.map((paquete, index) => (
          <PaqueteServicios key={index} {...paquete} />
        ))}
      </section>



      <InformacionGeneral />

    </div>
  );
};

export default CommunityManagement;