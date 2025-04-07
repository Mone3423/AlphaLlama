
import { React , useRef } from 'react';
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import VariableProximity from './TextAnimations/VariableProximity/VariableProximity'
import "./Hero.css";
import TextPressure from './TextAnimations/TextPressure/TextPressure';




const Hero = () => {
    const containerRef = useRef(null);
    return (
        <section className="hero">
          
            {/* Capa de video */}
            <div className="video-wrapper">
                <ReactPlayer
                    url="/video/La Paz cutslice.mp4"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="video-bg"
                />
            </div>

            {/* Contenido interactivo */}
            <div className="interactive-content">
                <motion.div
                    className="text-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="hero-title"
                    >

                        <div style={{ position: 'relative', height: '300px' }}>
                            <TextPressure
                                text="ALPHA LLAMA!"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={36}
                            />
                        </div>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="hero-subtitle"
                    >
                        <div
                            ref={containerRef}
                            style={{ position: 'relative' }}
                        >
                            <VariableProximity
                                label={'Transformamos tu visión en contenido multimedia de alto impacto'}
                                className={'variable-proximity-demo'}
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={100}
                                falloff='linear'
                            />
                        </div>

                    </motion.p>

                </motion.div>

                {/* Indicador de scroll mejorado */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: 1,
                        y: [0, 20, 0],
                        rotate: [0, 10, 10, 0]
                    }}
                    transition={{
                        delay: 3,
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;