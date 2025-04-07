import React from "react";
import HeroServices from "../../components/servicios/HeroServices";
import CircularGallery from '../../components/Components/CircularGallery/CircularGallery';
import { paquetesData } from "../../data/paquetesData";
import "./Fotografia.css";

const Fotografia = () => {
  return (
    <div className="contenedor-principal">
      {/* Hero reutilizable */}
      <HeroServices
        titulo="FOTOGRAFÍA & VIDEO"
        descripcion="Optimiza tu presencia online con estrategias efectivas."
      />

      {/* Renderizar todos los paquetes */}
      {paquetesData.map((paquete, index) => (
        <div key={index} className="paquete-container">
          <h2>{paquete.titulo}</h2>
          <p>{paquete.descripcion}</p>

          {/* Galería Circular */}
          <div className="galeria">
            <CircularGallery 
              items={paquete.galeria} 
              bend={4} 
              textColor="#ffffff" 
              borderRadius={0.1} 
              font="bold 28px 'Helvetica Neue', sans-serif" 
            />
          </div>

          {/* Opciones de Paquete */}
          <div className="paquete-opciones">
            {paquete.opciones.map((opcion, i) => (
              <div key={i} className="paquete-card">
                <div className="paquete-circulo">
                  <h3>{opcion.nombre}</h3>
                  <p>{opcion.precio}</p>
                </div>
                <ul>
                  {opcion.detalles.map((detalle, j) => (
                    <li key={j}>{detalle}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fotografia;
