//Bibliotecas
import MediaQuery from 'react-responsive';

function Section01(){
    return(
        <>
            <MediaQuery maxWidth={1024}>
                <section id="sobre" class="flex flex-col text-center">
                    <p class="text-4xl">Em direção ao <span className="letraDestaqueVerde">Futuro</span></p>
                    <p class="font-extralight text-2xl">
                        Construimos aplicações que mudam a sociedade
                    </p>
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <section id="sobre" class=" flex flex-col font-Poppins text-center">
                    <p class="text-7xl">
                        Em direção ao <span className="letraDestaqueVerde">Futuro</span>
                    </p>
                    <p class="text-5xl text-center font-extralight mt-8 w-2/5">
                        Construimos aplicações que mudam a sociedade
                    </p>
                </section>
            </MediaQuery>
        </>
    )
}

export default Section01;