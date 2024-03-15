// Bibliotecas
import { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

// Componentes
import TextFocus from '../functions/TextFocus.js';
import TextSwitch from '../functions/TextSwitch.js';
import Furacao from '../../assets/furacao.png';

// CSS
import '../functions/Furacao.css';

function Section04() {
    const [idAtivo, setIdAtivo] = useState(1);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const st = window.pageYOffset || document.documentElement.scrollTop;


            // Ajuste o valor do espaçamento de mudança
            const spacing = 60; // Pixels

            if (Math.abs(lastScrollTop - st) <= spacing) {
                return;
            }

            // Define a direção do scroll
            const direction = st > lastScrollTop ? 'down' : 'up';

            // Atualiza o idAtivo com base na direção do scroll
            if (direction === 'down') {
                setIdAtivo(prevId => (prevId === 4 ? 4 : prevId + 1));
            } else {
                setIdAtivo(prevId => (prevId === 1 ? 1 : prevId - 1));
            }

            setLastScrollTop(st <= 0 ? 0 : st);
        }

        // Adiciona um ouvinte de evento de rolagem
        window.addEventListener('scroll', handleScroll);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>  
            <MediaQuery maxWidth={1024}>
                <section>
                    <img className='furacao' src={Furacao} alt="Furacão" />
                    <div className="w-full">
                        <p className="text-2xl text-center"> Por que nos escolher ? </p>
                    </div>
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <section className="items-center content-center">
                    <img className='furacao' src={Furacao} alt="Furacão" />
                    <div className="w-full">
                        <p className="text-7xl font-Poppins m-auto block w-3/12 text-center"> Por que nos escolher ? </p>
                    </div>
                    <div className="w-full items-center mt-[8.5%] flex flex-row gap-20">
                        <div className="w-7/12 background-image: bg-gradient-to-t from-purple-500/45  to-green-400/45  rounded-tr-3xl rounded-br-3xl ">
                            <TextSwitch idAtivo={idAtivo} />
                        </div>
                        <ul className="w-4/12 text-right space-y-12 flex flex-col">
                            <li>
                                <TextFocus id="1" atualizarIdAtivo={setIdAtivo} idAtivo={idAtivo}>Análise de Dados</TextFocus>
                            </li>
                            <li>
                                <TextFocus id="2" atualizarIdAtivo={setIdAtivo} idAtivo={idAtivo}>Personalização</TextFocus>
                            </li>
                            <li>
                                <TextFocus id="3" atualizarIdAtivo={setIdAtivo} idAtivo={idAtivo}>Transformação Digital</TextFocus>
                            </li>
                            <li>
                                <TextFocus id="4" atualizarIdAtivo={setIdAtivo} idAtivo={idAtivo}>Design Inteligente</TextFocus>
                            </li>
                        </ul>
                    </div>
                </section>
            </MediaQuery>
        </>
    );
}

export default Section04;