import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Section01() {
  const texts = [
    'Construimos aplicações que mudam a sociedade',
    'Valorizamos relacionamentos baseados em confiança, respeito e transparência.',
    'Agimos com integridade e ética, assumindo a responsabilidade pelo impacto de nossas ações.',
    'Buscamos constantemente novas maneiras de impulsionar o progresso tecnológico.',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (texts.length > 0) {
        setShowText(false);
      }
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentTextIndex, texts.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (texts.length > 0) {
        const nextIndex = (currentTextIndex + 1) % texts.length;
        setCurrentTextIndex(nextIndex);
        setShowText(true);
      }
    }, 8500);

    return () => {
      clearTimeout(timer);
    };
  }, [currentTextIndex, texts.length]);

  const getTextFontSize = () => {
    if (isMobile) {
      return '1.5rem'; // Tamanho do texto em dispositivos móveis
    } else {
      return '2.7rem'; // Tamanho do texto em outros dispositivos
    }
  };

  const getTitleFontSize = () => {
    if (isMobile) {
      return '2rem'; // Tamanho do título em dispositivos móveis
    } else {
      return '4rem'; // Tamanho do título em outros dispositivos
    }
  };

  const getTextContainerHeight = () => {
    if (isMobile) {
      return '130px'; // Altura do container do texto em dispositivos móveis
    } else {
      return '100px'; // Altura do container do texto em outros dispositivos
    }
  };

  return (
    <section id="sobre" className="flex flex-col font-Poppins text-center">
      <p className="titulo" style={{ fontSize: getTitleFontSize() }}>
        Em direção ao <span className="letraDestaqueVerde ">Futuro</span>
      </p>
      <div className="texto-container" style={{ height: getTextContainerHeight(), display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
        <AnimatePresence wait>
          {showText && texts.length > 0 && (
            <motion.p
              key={currentTextIndex}
              className="text-4xl text-center font-extralight mt-8 w-9/12"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: 1500, opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.2 }}
              style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: getTextFontSize() }}
            >
              {texts[currentTextIndex]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Section01;