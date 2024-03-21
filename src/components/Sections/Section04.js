import { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import TextFocus from '../functions/TextFocus.js';
import TextSwitch from '../functions/TextSwitch.js';
import Furacao from '../../assets/furacao.png';

import '../functions/Furacao.css';

function Section04() {
  const [idAtivo, setIdAtivo] = useState(1);

  function atualizarIdAtivo(idText) {
    setIdAtivo(idText);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next idAtivo value
      const nextId = (idAtivo % 4) + 1;
      setIdAtivo(nextId);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [idAtivo]);

  return (
    <>
      <MediaQuery maxWidth={1024}>
        <section>
          <img className="furacao" src={Furacao} alt="Furacao" />
          <div class="w-full">
            <p class="text-2xl text-center">Por que nos escolher?</p>
          </div>
        </section>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <section class="items-center content-center">
          <img className="furacao" src={Furacao} alt="Furacao" />
          <div class="w-full">
            <p class="text-6xl font-Poppins m-auto block w-3/12 text-center">
              Por que nos escolher?
            </p>
          </div>
          <div class="w-full items-center mt-[8.5%] flex flex-row gap-20">
            <div class="w-7/12 background-image: bg-gradient-to-t from-purple-500/45  to-green-400/45  rounded-tr-3xl rounded-br-3xl ">
              <TextSwitch idAtivo={idAtivo} />
            </div>
            <ul class="w-4/12 text-right space-y-12 flex flex-col text-4xl ">
              <li>
                <TextFocus
                  id="1"
                  atualizarIdAtivo={atualizarIdAtivo}
                  idAtivo={idAtivo}
                >
                  Análise de Dados
                </TextFocus>
              </li>
              <li>
                <TextFocus
                  id="2"
                  atualizarIdAtivo={atualizarIdAtivo}
                  idAtivo={idAtivo}
                >
                  Personalização
                </TextFocus>
              </li>
              <li>
                <TextFocus
                  id="3"
                  atualizarIdAtivo={atualizarIdAtivo}
                  idAtivo={idAtivo}
                >
                  Transformação Digital
                </TextFocus>
              </li>
              <li>
                <TextFocus
                  id="4"
                  atualizarIdAtivo={atualizarIdAtivo}
                  idAtivo={idAtivo}
                >
                  Design Inteligente
                </TextFocus>
              </li>
            </ul>
          </div>
        </section>
      </MediaQuery>
    </>
  );
}

export default Section04;