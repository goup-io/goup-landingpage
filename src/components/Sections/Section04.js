import { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';

import TextFocus from '../functions/TextFocus.js';
import TextFocus2 from '../functions/TextFocus2.js';
import TextSwitch from '../functions/TextSwitch.js';
import TextSwitch2 from '../functions/TextSwitch2.js';
import Furacao from '../../assets/furacao.png';

import '../functions/Furacao.css';
import '../functions/overflow.css';

function Section04() {
  const [idAtivo, setIdAtivo] = useState('0');

  function atualizarIdAtivo(idText) {
    setIdAtivo(idText);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Alterna o valor de idAtivo entre 1, 2, 3 e 4
      setIdAtivo(prevId => {
        if (prevId === '4') {
          return '1';
        } else {
          return (parseInt(prevId) + 1).toString();
        }
      });
    }, 15000); // 5000 milissegundos = 5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <>
<MediaQuery maxWidth={1024}>
  <section style={{ display: 'flex', flexDirection: 'column' }}>
    <div className="w-full">
      <p className="text-2xl font-Poppins m-auto block w-4/12 text-center mb-8">Por que nos escolher?</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul className="w-full text-right flex flex-col text-2xl text-white"  class="list-none">
        <li>
          <TextFocus2
            id="1"
            atualizarIdAtivo={atualizarIdAtivo}
            idAtivo={idAtivo}
          >
            Análise de Dados
          </TextFocus2>
          <div className={`w-full mt-6 mb-6 text-wrap flex justify-center overflow-container ${idAtivo === '1' ? '' : 'hidden'}`} >
            <TextSwitch2 idAtivo={idAtivo} />
          </div>
        </li>

        <li>
          <TextFocus2
            id="2"
            atualizarIdAtivo={atualizarIdAtivo}
            idAtivo={idAtivo}
          >
            Personalização
          </TextFocus2>
          <div className={`w-full mt-6 mb-6 text-wrap flex justify-center overflow-container ${idAtivo === '2' ? '' : 'hidden'}`}>
            <TextSwitch2 idAtivo={idAtivo} />
          </div>
        </li>

        <li>
          <TextFocus2
            id="3"
            atualizarIdAtivo={atualizarIdAtivo}
            idAtivo={idAtivo}
          >
            Transformação Digital
          </TextFocus2>
          <div className={`w-full mt-6 mb-6 text-wrap flex justify-center overflow-container ${idAtivo === '3' ? '' : 'hidden'}`} >
            <TextSwitch2 idAtivo={idAtivo} />
          </div>
        </li>

        <li>
          <TextFocus2
            id="4"
            atualizarIdAtivo={atualizarIdAtivo}
            idAtivo={idAtivo}
          >
            Design Inteligente
          </TextFocus2>
          <div className='flex flex-row'>
            <div className={`w-full  text-wrap mt-6 flex justify-center  overflow-container ${idAtivo === '4' ? '' : 'hidden'}`} >
              <TextSwitch2 idAtivo={idAtivo} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</MediaQuery>
      <MediaQuery minWidth={1025}>
        <section className="items-center content-center">
          <img className="furacao" src={Furacao} alt="Furacao" />
          <div className="w-full">
            <p className="text-6xl font-Poppins m-auto block w-3/12 text-center">
              Por que nos escolher?
            </p>
          </div>
          <div className="w-full items-center mt-[8.5%] flex flex-row gap-20">
            <div className="w-7/12 bg-gradient-to-t from-purple-500/45 to-green-400/45 rounded-tr-3xl rounded-br-3xl">
              <TextSwitch idAtivo={idAtivo} />
            </div>
            <ul className="w-4/12 text-right space-y-12 flex flex-col text-4xl ">
              <li >
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