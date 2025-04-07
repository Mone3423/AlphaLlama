import React from "react";

const InformacionGeneral = () => {
  const styles = {
    section: {
      background: "#f9f9f9",
      padding: "4rem 2rem",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      gap: "2rem",
      alignItems: "flex-start",
    },
    column: {
      flex: "1",
      background: "white",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2rem",
      color: "#e63946",
      marginBottom: "1rem",
      textTransform: "uppercase",
    },
    text: {
      fontSize: "1.1rem",
      color: "#555",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    listItem: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "1rem",
    },
    question: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "#1d3557",
      marginTop: "1.5rem",
    },
    answer: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.6",
    },
  };

  const preguntas = [
    {
      pregunta: "¿Cuánto dura una sesión?",
      respuesta:
        "Fotografía de producto: 2-4 horas. Interiorismo: 1-3 horas. Corporativa: jornada completa.",
    },
    {
      pregunta: "¿Qué pasa si necesitamos más fotos?",
      respuesta:
        "Se pueden tomar más fotos en la sesión. Cada foto extra tiene un costo de 100 Bs (excepto en fotografía corporativa).",
    },
    {
      pregunta: "¿Cuántos fotógrafos van a la sesión?",
      respuesta:
        "Depende del tipo de sesión: Producto (1 + ayudante), Interiorismo (1 + ayudante), Corporativa (2 fotógrafos según cantidad de personal), Eventos (2 fotógrafos para cobertura completa).",
    },
    {
      pregunta: "¿Qué pasa si necesitamos cambiar la fecha?",
      respuesta:
        "Las fechas pueden reprogramarse con al menos una semana de anticipación.",
    },
    {
      pregunta: "¿Son los depósitos reintegrables?",
      respuesta:
        "Si la cancelación es con más de una semana de aviso, se devuelve el depósito. Si es dentro de la semana, no se devuelve.",
    },
    {
      pregunta: "¿En cuánto tiempo se entrega el producto?",
      respuesta:
        "Las fotos se entregan en 7-10 días digitalmente. Los videos en 2 semanas.",
    },
    {
      pregunta: "¿Guardan un respaldo de fotos y videos?",
      respuesta:
        "Sí, guardamos el material por 3 meses. Si el cliente lo pierde, se puede reenviar sin costo.",
    },
    {
      pregunta: "¿Cómo entregan la factura?",
      respuesta:
        "Enviamos la factura digitalmente por correo electrónico, según el nuevo sistema de facturación digital.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Columna 1 - Información General */}
        <div style={styles.column}>
          <h2 style={styles.title}>Información General</h2>
          <h3 style={styles.title}>¿Qué es Community Management?</h3>
          <p style={styles.text}>
            La gestión comunitaria es la práctica de construir una comunidad
            auténtica, ya sea externamente entre sus clientes o internamente
            entre sus empleados y socios a través de varios tipos de
            interacciones.
          </p>
          <h3 style={styles.title}>¿Por qué es importante?</h3>
          <ul>
            <li style={styles.listItem}>
              <strong>✔ Retención de clientes:</strong> Ayuda a fidelizar a los
              clientes existentes.
            </li>
            <li style={styles.listItem}>
              <strong>✔ Captación de nuevos clientes:</strong> El boca a boca
              positivo impulsa el crecimiento.
            </li>
            <li style={styles.listItem}>
              <strong>✔ Reputación de marca:</strong> Construye una identidad
              sólida a largo plazo.
            </li>
          </ul>
          <h3 style={styles.title}>
            ¿Qué diferencia a ALPHA LLAMA de otras agencias?
          </h3>
          <p style={styles.text}>
            Somos una empresa con años de experiencia en gestión de redes
            sociales con casos de éxito. Incluimos fotografía y videografía en
            todos nuestros paquetes, lo que nos diferencia de la competencia.
          </p>
          <p style={styles.text}>
            Nos enfocamos en aumentar la notoriedad y presencia de los negocios
            en redes sociales, logrando un mayor alcance y captación de
            clientes.
          </p>
        </div>

        {/* Columna 2 - Preguntas Frecuentes */}
        <div style={styles.column}>
          <h2 style={styles.title}>Preguntas Frecuentes</h2>
          {preguntas.map((item, index) => (
            <div key={index}>
              <p style={styles.question}>❓ {item.pregunta}</p>
              <p style={styles.answer}>{item.respuesta}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos Responsivos */}
      <style>
        {`
          @media (max-width: 1024px) {
            div {
              flex-direction: column;
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 1.8rem;
            }
            
            p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default InformacionGeneral;

