import { useState } from 'react';
import TextFocus from '../functions/TextFocus.js'
import TextSwitch from '../functions/TextSwitch.js';

function Section04() {

    const [idAtivo, setIdAtivo] = useState(1)

    function atualizarIdAtivo(idText){
        setIdAtivo(idText)
    }

    return (
        <section class=" items-center content-center">
            <div class="w-full">
                <p class=" text-7xl font-Poppins m-auto block w-3/12 text-center"> Por que nos escolher ? </p>
            </div>
            <div class="w-full items-center mt-[8.5%] flex flex-row gap-20">
                <div class="w-7/12 background-image: bg-gradient-to-t from-purple-500/45  to-green-400/45  rounded-tr-3xl rounded-br-3xl ">
                    <TextSwitch idAtivo={idAtivo}/>
                </div>
                <ul class="w-4/12 text-right space-y-12 flex flex-col">
                    <li>
                        <TextFocus id="1" atualizarIdAtivo={atualizarIdAtivo} idAtivo={idAtivo}>Análise de Dados</TextFocus>
                    </li>
                    <li>
                        <TextFocus id="2" atualizarIdAtivo={atualizarIdAtivo} idAtivo={idAtivo}>Personalização</TextFocus>
                    </li>
                    <li>
                        <TextFocus id="3" atualizarIdAtivo={atualizarIdAtivo} idAtivo={idAtivo}>Transformação Digital</TextFocus>
                    </li>
                    <li>
                        <TextFocus id="4" atualizarIdAtivo={atualizarIdAtivo} idAtivo={idAtivo}>Design Inteligente</TextFocus>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Section04;
