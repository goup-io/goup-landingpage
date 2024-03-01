import Foguete from '../assets/foguete.png'
import '../index.css';

function Section02(){
    return (
        <section class="flex items-center justify-center mt-64">
            <img src={`${Foguete}`}></img>
            <div class="w-2/6">
                <p class="text-7xl">Com a gente seu negócio <span className="letraDestaqueVerde">decola</span></p>
                <p class="font-extralight mt-10">Oferecemos soluções personalizadas para seus problemas</p>
            </div>
        </section>
    )
}

export default Section02;