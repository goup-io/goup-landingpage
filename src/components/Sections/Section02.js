//Bibliotecas
import MediaQuery from 'react-responsive';

//Imagens
import Foguete from '../../assets/foguete.png'
import Fogo from '../../assets/fogo.png'

function Section02(){
    return (
        <>
            <MediaQuery maxWidth={1024}>
                <section id="sobre" class="flex flex-row">
                    <div>
                         <img src={`${Foguete}`} class="animate-foguete"></img>
                        <img src={`${Fogo}`} class="animate-fogo"></img>
                    </div>
                    <div>
                        <p class="text-3xl">Com a gente seu negócio <span className="letraDestaqueVerde">decola</span></p>
                        <p class="font-extralight text-2xl">Oferecemos soluções personalizadas para seus problemas</p>
                    </div>
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <section id="sobre" class="flex flex-row justify-center gap-20">
                    <div>
                        <img src={`${Foguete}`} class="animate-foguete"></img>
                        <img src={`${Fogo}`} class="mx-20 -mt-14 animate-fogo"></img>
                    </div>
                    <div class="flex flex-col justify-center items-center w-2/6">
                        <p class="text-7xl">Com a gente seu negócio <span className="letraDestaqueVerde">decola</span></p>
                        <p class="font-extralight mt-10">Oferecemos soluções personalizadas para seus problemas</p>
                    </div>
                </section>
            </MediaQuery>
        </>
    )
}

export default Section02;