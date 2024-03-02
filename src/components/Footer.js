import iconEmail from '../assets/icon/iconEmail.png';
import iconWhatsApp from '../assets/icon/iconWhatsApp.png';
import iconTelefone from '../assets/icon/iconTelefone.png';
import "../index.css"

function Footer(){
    return(
        <section class="flex flex-col justify-center mt-80 ">
            <p class="text-center text-7xl w-1/3">Quer fazer parte do <span className="letraDestaqueVerde">futuro ?</span></p>
            <div class="flex flex-row justify-center m-20 gap-10">
                <p class="text-end w-1/4 font-extralight">Entre em contato conosco sobre seu negócio para que possamos agendar uma visita.</p>
                <div class="bg-verdeGoUp w-3 rounded-lg"></div>
                <ul class="flex flex-col align-center justify-around">
                    <li class="flex">
                        <img src={iconEmail}></img>
                        <p>goup@gmail.com</p>
                    </li>
                    <li class="flex">
                        <img src={iconWhatsApp}></img>
                        <p>(11)99999-9999</p>
                    </li>
                    <li class="flex">
                        <img src={iconTelefone}></img>
                        <p>(11)3333-3333</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;