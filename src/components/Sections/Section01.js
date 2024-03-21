import MediaQuery from 'react-responsive';
import "../functions/TextAnimation.css"

function Section01() {
  const texts = [
    'Construimos aplicações que mudam a sociedade',
    'Valorizamos relacionamentos baseados em confiança, respeito e transparência.',
    'Agimos com integridade e ética, assumindo a responsabilidade pelo impacto de nossas ações.',
    'Buscamos constantemente novas maneiras de impulsionar o progresso tecnológico.',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentTextIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentTextIndex + 1) % texts.length;
      setCurrentTextIndex(nextIndex);
      setShowText(true);
    }, 8500);

    return () => {
      clearTimeout(timer);
    };
  }, [currentTextIndex, texts.length]);

  return (
    <>
      <MediaQuery minWidth={1025}>
        <section id="sobre" className="flex flex-col font-Poppins text-center">
          <p className="titulo">
            Em direção ao <span className="letraDestaqueVerde">Futuro</span>
          </p>
          <div className="texto-container" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence wait>
              {showText && (
                <motion.p
                  key={currentTextIndex}
                  className="text-4xl text-center font-extralight mt-8 w-7/12"
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: 1500, opacity: 0 }}
                  transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.2 }}
                  style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}
                >
                  {texts[currentTextIndex]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>
      </MediaQuery>
    </>
  );
}

export default Section01;