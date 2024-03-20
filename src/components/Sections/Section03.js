//Bibliotecas
import MediaQuery from 'react-responsive';
import { useState } from 'react';

//CSS
import '../../App.css'

//Imagens
import Tablet from '../../assets/tablet.png';
import TabletJS from '../Tablet.js'
import ImagemAux01 from '../../assets/Ecommerce web page-cuate 1.png'
import ImagemAux02 from '../../assets/Data extraction-amico 2.png'
import ImagemAux03 from '../../assets/Starting a business project-amico (1) 2.png'


function Section03(){

    const [idTabletAtivo, setIdTabletAtivo] = useState(0)


    return(
        <>

            <MediaQuery maxWidth={1024}>

                <section id="cases" class="flex w-fill justify-evenly">

                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>

                <section id="cases" class="flex flex-col w-fill justify-evenly">

                    <p class="text-7xl w-2/4 text-center">Quais as vantagens de usar um <span class="text-verdeGoUp font-bold ">ERP</span> ?</p>

                    <div class="w-full justify-evenly flex mt-24">
                        <TabletJS id="1" setIdTabletAtivo={setIdTabletAtivo} idTabletAtivo={idTabletAtivo}>
                            <p class="font-semibold text-5xl">Controle adequado para o seu negócio</p>
                            <p class="font-light mt-12 pl-12 text-4xl text-end">Saiba de tudo o que está acontecendo com o seu negócio.</p>
                            <img class="mt-8"src={ImagemAux01}></img>
                        </TabletJS>
                        <TabletJS id="2" setIdTabletAtivo={setIdTabletAtivo} idTabletAtivo={idTabletAtivo}>
                            <p class="font-semibold text-5xl">Automatização de processos</p>
                            <p class="font-light mt-12 pl-14 text-4xl text-end">Automatiza tarefas repetitivas que consomem seu tempo.</p>
                            <img class="mt-8"src={ImagemAux02}></img>
                        </TabletJS>                        
                        <TabletJS id="3" setIdTabletAtivo={setIdTabletAtivo} idTabletAtivo={idTabletAtivo}>
                            <p class="font-semibold text-5xl">Informações em tempo real</p>
                            <p class="font-light mt-12 pl-12 text-4xl text-end">Estamos com você na hora de tomar as decisões importantes.</p>
                            <img class="mt-8"src={ImagemAux03}></img>
                        </TabletJS>
                    </div>


                    {/* <div class="w-2/5">
                        <p class="text-7xl">Utilize de todo o poder de nosso <span className='letraDestaqueVerde'>ERP</span></p>
                        <p class="font-extralight mt-10">Chega de ERPs com diversas funcionalidades não usadas.
                    Construímos um capaz de atender todas as suas necessidades que consegue ser simples e fácil de usar.</p>
                    </div>
                    <img src={`${Tablet}`}></img> */}
                </section>
            </MediaQuery>
        </>
    )
}

export default Section03;