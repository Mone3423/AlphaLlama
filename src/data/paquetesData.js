import BoastedCoffeeBeans from '../assets/mages/Producto/Roasted-coffee-beans-986011 .jpg';
import TastyBananaCaramelMilkshake from '../assets/mages/Producto/Tasty-banana-and-caramel-milkshake-930022 .jpg';
import BurgersWoodenTable from '../assets/mages/Producto/Burgers-in-a-wooden-table-408490 .jpg';
import CocktailTangerine from '../assets/mages/Producto/Cocktail-with-tangerine-and-ice-1113276 .jpg';
import Gozleme from '../assets/mages/Producto/Gozleme-1026535 .jpg';
import imageint from '../assets/mages/interiores/_YES4268 .jpg';
import imageint1 from '../assets/mages/interiores/_YES8805 .jpg';
import imageint2 from '../assets/mages/interiores/_YES9928 .jpg';
import YES1228 from '../assets/mages/corporativa/_YES1228 .jpg';
import YES1236 from '../assets/mages/corporativa/_YES1236 .jpg';
import YES1238 from '../assets/mages/corporativa/_YES1238 .jpg';
import YES8179 from '../assets/mages/corporativa/_YES8179 .jpg';
import YES8182 from '../assets/mages/corporativa/_YES8182 .jpg';

export const paquetesData = [
  
    {
      "titulo": "FOTOGRAFÍA DE PRODUCTO",
      "descripcion": "El objetivo de este tipo de fotografía es concentrar toda la atención de los consumidores en un único elemento al producto. Para lograrlo, en la foto se muestra la mayor cantidad de información posible como tamaño, color, textura y accesorios de la pieza desde diferentes ángulos.",
      "galeria": [
     
        {
          image: BoastedCoffeeBeans,
         
        },
        {
          image: TastyBananaCaramelMilkshake,
          
        },
        {
          image: BurgersWoodenTable,
          
        },
        {
          image: CocktailTangerine,
          
        },
        {
          image: Gozleme,
          
        }
      ],
      "opciones": [
        {
          "nombre": "Paquete Básico",
          "precio": "1100 BS",
          "detalles": [
            "20 fotografías de alta resolución",
            "Hasta 10 productos por sesión",
            "Incluye: Cámara, trípode, fotos en locación",
            "Fotos extras: 100 BS cada una",
            "No incluye viáticos fuera de La Paz",
            "Incluye factura"
          ]
        },
        {
          "nombre": "Paquete Profesional",
          "precio": "1500 BS",
          "detalles": [
            "20 fotografías de alta resolución",
            "Hasta 10 productos por sesión",
            "Incluye: Cámara profesional, props, utilería, iluminación profesional, flashes, rebotadores, difusores, etc.",
            "Fotos extras: 100 BS cada una",
            "No incluye viáticos fuera de La Paz",
            "Incluye factura"
          ]
        }
      ]
    },
    {
      "titulo": "FOTOGRAFÍA DE INTERIORES",
      "descripcion": "Fotografía especializada en hoteles, edificios y construcciones para destacar espacios arquitectónicos y diseños interiores.",
      "galeria": [ {image: imageint },{image: imageint1 },{image: imageint2}],
      "opciones": [
        {
          "nombre": "Paquete Estándar",
          "precio": "1500 BS",
          "detalles": [
            "20 fotografías de alta resolución",
            "Cobertura para hotel/edificio/construcción",
            "Incluye: Cámara, trípode, fotos en locación",
            "Fotos extras: 100 BS cada una",
            "No incluye viáticos fuera de La Paz",
            "Incluye factura"
          ]
        }
      ]
    },
    {
      "titulo": "FOTOGRAFÍA CORPORATIVA",
      "descripcion": "Servicio para generar marca personal y recursos gráficos para medios de comunicación. Mejora la imagen empresarial con resultados profesionales.",
      "galeria": [{ image: YES1228 },
        { image: YES1236 },
        { image: YES1238 },
        { image: YES8179 },
        { image: YES8182 }],
      "opciones": [
        {
          "nombre": "Paquete Básico",
          "precio": "2500 BS",
          "detalles": [
            "30 fotos del personal",
            "10 fotografías de alta resolución",
            "Incluye: Cámara profesional, iluminación, flashes, rebotadores, difusores, maquilladora y retoque digital",
            "Incluye factura"
          ]
        },
        {
          "nombre": "Paquete Premium",
          "precio": "3000 BS",
          "detalles": [
            "20 fotos del personal",
            "20 fotografías de alta resolución",
            "Mismos recursos que el paquete básico"
          ]
        },
        {
          "nombre": "Paquete Completo",
          "precio": "4500 BS",
          "detalles": [
            "30 fotos del personal",
            "30 fotografías de alta resolución",
            "Incluye todos los recursos profesionales"
          ]
        }
      ]
    },
    {
      "titulo": "FOTOGRAFÍA DE CONCIERTOS / EVENTOS CORPORATIVOS",
      "descripcion": "Generación de archivos visuales para eventos empresariales, reflejando la promoción de productos y marca.",
      "galeria": [{ src: "/images/producto1.jpg", alt: "Foto 1" },],
      "opciones": [
        {
          "nombre": "Paquete Estándar",
          "precio": "2000 BS",
          "detalles": [
            "40 fotografías de alta resolución",
            "Incluye: Dos fotógrafos, cámara, trípode",
            "No incluye viáticos fuera de La Paz",
            "Incluye factura"
          ]
        }
      ]
    },
    {
      "titulo": "FOTOGRAFÍA DE TURISMO",
      "descripcion": "Fotografía creada para comercializar destinos turísticos, atrayendo a potenciales visitantes mediante imágenes impactantes.",
      "galeria": [{ src: "/images/producto1.jpg", alt: "Foto 1" },],
      "opciones": [
        {
          "nombre": "Paquete 1",
          "precio": "3500 BS",
          "detalles": [
            "20 fotografías de alta resolución",
            "1 video de destino",
            "Servicio full day"
          ]
        },
        {
          "nombre": "Paquete 2",
          "precio": "3700 BS",
          "detalles": [
            "30 fotografías de alta resolución",
            "2 videos de destino"
          ]
        },
        {
          "nombre": "Paquete 3",
          "precio": "5600 BS",
          "detalles": [
            "40 fotografías de alta resolución",
            "3 videos de destino"
          ]
        }
      ]
    },
    {
      "titulo": "VIDEO PRODUCTO",
      "descripcion": "Piezas audiovisuales cortas que destacan características y usos de un producto, con imágenes cautivadoras.",
      "galeria": [{ src: "/images/producto1.jpg", alt: "Foto 1" },],
      "opciones": [
        {
          "nombre": "15 segundos",
          "precio": "800 BS",
          "detalles": ["Guionización, rodaje y postproducción"]
        },
        {
          "nombre": "30 segundos",
          "precio": "1000 BS",
          "detalles": ["Guionización, rodaje y postproducción"]
        },
        {
          "nombre": "45 segundos a 1 minuto",
          "precio": "1500 BS",
          "detalles": ["Guionización, rodaje y postproducción"]
        }
      ]
    },
    {
      "titulo": "B-ROLL",
      "descripcion": "Metraje adicional para enriquecer videos principales, aportando contexto visual y calidad narrativa.",
      "galeria": [{ src: "/images/producto1.jpg", alt: "Foto 1" },],
      "opciones": [
        {
          "nombre": "Paquete Básico",
          "precio": "2500 BS",
          "detalles": ["Duración: 20 a 45 segundos"]
        }
      ]
    },

    {
      "titulo": "COMERCIALES Y VIDEOS INSTITUCIONALES",
      "descripcion": "Producción de comerciales y videos corporativos bajo requerimiento específico y presupuesto personalizado.",
      "galeria": [{ src: "/images/producto1.jpg", alt: "Foto 1" },],
      "opciones": [
        {
          "nombre": "Personalizado",

          "detalles": ["Bajo presupuesto y reunión previa",
            "Incluye factura"]
        }
      ]
    }
  
  // Agrega aquí las demás categorías (4 más)
];
