import Tablet from '../assets/tablet.png';
import '../index.css';

function Section03(){
    return(
        <section id="cases" class="flex w-fill justify-evenly">
            <div class="w-2/5">
                <p class="text-7xl">Utilize de todo o poder de nosso <span className='letraDestaqueVerde'>ERP</span></p>
                <p class="font-extralight mt-10">Chega de ERPs com diversas funcionalidades não usadas.
Construímos um capaz de atender todas as suas necessidades que consegue ser simples e fácil de usar.</p>
            </div>
            <img src={`${Tablet}`}></img>
        </section>
    )
}

export default Section03;