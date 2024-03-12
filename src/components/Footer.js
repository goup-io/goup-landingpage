//Bibliotecas
import MediaQuery from 'react-responsive';

//Componentes
import IconList from './iconList'

//Imagens
import iconEmail from '../assets/icon/iconEmail.png';
import iconWhatsApp from '../assets/icon/iconWhatsApp.png';
import iconTelefone from '../assets/icon/iconTelefone.png';

//CSS
import "../index.css"

function Footer(){
    return(
        <>
            <MediaQuery maxWidth={1024}>
                <section id='footer' class="flex flex-col justify-center">
                    <p class="text-2xl text-center">Quer fazer parte do <span className="letraDestaqueVerde">futuro</span> ?</p>
                    <div class="flex flex-col items-center gap-8">
                        <p class="w-4/5 text-xl text-center font-extralight mt-5">Entre em contato conosco sobre seu negócio para que possamos agendar uma visita.</p>
                        <div class="bg-verdeGoUp w-2/3 h-2 rounded-lg"></div>
                        <ul class="flex flex-col gap-5 items-center">
                            <IconList icone={iconEmail}><p class="text-2xl">goup@gmail.com</p></IconList>
                            <IconList icone={iconWhatsApp}><p class="text-2xl">(11)99999-9999</p></IconList>
                            <IconList icone={iconTelefone}><p  class="text-2xl">(11)3333-3333</p></IconList>
                        </ul>
                    </div>
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <section id="footer" class="flex flex-col justify-center mt-80 ">
                    <p class="text-center text-7xl w-1/3">Quer fazer parte do <span className="letraDestaqueVerde">futuro ?</span></p>
                    <div class="flex flex-row justify-center m-20 gap-10">
                        <p class="text-end w-1/4 font-extralight">Entre em contato conosco sobre seu negócio para que possamos agendar uma visita.</p>
                        <div class="bg-verdeGoUp w-3 rounded-lg"></div>
                        <ul class="flex flex-col align-center justify-around">
                            <IconList icone={iconEmail}>goup@gmail.com</IconList>
                            <IconList icone={iconWhatsApp}>(11)99999-9999</IconList>
                            <IconList icone={iconTelefone}>(11)3333-3333</IconList>
                        </ul>
                    </div>
                </section>
            </MediaQuery>
        </>
    )
}

export default Footer;