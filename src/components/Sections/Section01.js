import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MediaQuery from 'react-responsive';

function Section01() {
    const [showFirstText, setShowFirstText] = useState(true);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);
    const [showFourthText, setShowFourthText] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowFirstText(false);
        }, 5000);

        const timer2 = setTimeout(() => {
            setShowSecondText(true);
        }, 10500);

        const timer3 = setTimeout(() => {
            setShowSecondText(false);
            setShowThirdText(true);
        }, 15000);

        const timer4 = setTimeout(() => {
            setShowThirdText(false);
            setShowFourthText(true);
        }, 20500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <>
            <MediaQuery minWidth={1025}>
                <section id="sobre" className="flex flex-col font-Poppins text-center">
                    <p className="text-7xl">
                        Em direção ao <span className="letraDestaqueVerde">Futuro</span>
                    </p>
                    <AnimatePresence>
                        {showFirstText && (
                            <motion.p
                                key="firstText"
                                className="text-5xl text-center font-extralight mt-8 w-2/5"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0, x: 150, transition: { duration: 0.5 }, ease: 'easeInOut' }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                            >
                                Construimos aplicações que mudam a sociedade
                            </motion.p>
                        )}
                        <AnimatePresence>
                            {showSecondText && (
                                <motion.p
                                    key="secondText"
                                    className="text-5xl text-center font-extralight mt-8 w-2/5"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0, x: 150, transition: { duration: 0.5 }, ease: 'easeInOut' }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                >
                                    Valorizamos relacionamentos baseados em confiança, respeito e transparência.
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {showThirdText && (
                                <motion.p
                                    key="thirdText"
                                    className="text-5xl text-center font-extralight mt-8 w-2/5"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0, x: 150, transition: { duration: 0.5 }, ease: 'easeInOut' }}
                                    transition={{ duration: 2, ease: 'easeInOut' }}
                                >
                                    Agimos com integridade e ética, assumindo a responsabilidade pelo impacto de nossas ações.
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {showFourthText && (
                                <motion.p
                                    key="fourthText"
                                    className="text-5xl text-center font-extralight mt-8 w-2/5"
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0, x: 150, transition: { duration: 0.5 }, ease: 'easeInOut' }}
                                    transition={{ duration: 2, ease: 'easeInOut' }}
                                >
                                    Buscamos constantemente novas maneiras de impulsionar o progresso tecnológico.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </AnimatePresence>
                </section>
            </MediaQuery>
        </>
    );
}

export default Section01;
