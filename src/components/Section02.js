import Foguete from '../assets/foguete.png'
import Fogo from '../assets/fogo.png'
import '../index.css';

function Section02(){
    return (
        <section id="sobre" class="flex flex-row justify-center gap-20">
            <div class="">
                <img src={`${Foguete}`} class="animate-foguete"></img>
                <img src={`${Fogo}`} class="mx-20 -mt-14 animate-fogo"></img>
            </div>
            <div class="flex flex-col justify-center items-center w-2/6">
                <p class="text-7xl">Com a gente seu negócio <span className="letraDestaqueVerde">decola</span></p>
                <p class="font-extralight mt-10">Oferecemos soluções personalizadas para seus problemas</p>
            </div>
        </section>
    )
}

export default Section02;