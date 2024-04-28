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
                    <div class ="w-5/6">
                         <img src={`${Foguete}`} class="w-56 animate-foguete"></img>
                        <img src={`${Fogo}`} class=" mx-2 w-12 animate-fogo"></img>
                    </div>
                    <div class = "ml-2">
                        <p class="text-3xl w-3/4" > Com a gente seu negócio <span className="letraDestaqueVerde">decola</span></p>
                        <p class="font-extralight mt-4 text-2xl w-full text-wrap">Oferecemos soluções personalizadas para seus problemas</p>
                    </div>
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <section id="sobre" class="flex flex-row justify-center gap-20">
                    <div >
                        <img src={`${Foguete}`} class="animate-foguete"></img>
                        <img src={`${Fogo}`} class="mx-20 -mt-14 animate-fogo"></img>
                    </div>
                    <div class="flex flex-col justify-center items-center w-2/6">
                        <p class="text-5xl">Com a gente seu negócio <span className="letraDestaqueVerde">decola</span></p>
                        <p class="font-extralight mt-10 text-4xl" >Oferecemos soluções personalizadas para seus problemas</p>
                    </div>
                </section>
            </MediaQuery>
        </>
    )
}

export default Section02;