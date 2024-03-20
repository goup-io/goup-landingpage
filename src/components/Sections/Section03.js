//Bibliotecas
import MediaQuery from 'react-responsive';

//Imagens
import Tablet from '../../assets/tablet.png';

function Section03(){
    return(
        <>
            <MediaQuery maxWidth={1024}>

                <section id="cases" class="flex w-fill justify-evenly">
                    <div class="w-3/5">
                        <p class="text-2xl">Utilize de todo o poder de nosso <span className='letraDestaqueVerde'>ERP</span></p>
                        <p class="font-extralight text-xl">Chega de ERPs com diversas funcionalidades não usadas.
                        Construímos um capaz de atender todas as suas necessidades que consegue ser simples e fácil de usar.</p>
                    </div>
                    <img src={`${Tablet}`} class="w-1/4"></img>
                </section>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <section id="cases" class="flex w-fill justify-evenly">
                    <div class="w-2/5">
                        <p className='titulo'>Utilize de todo o poder de nosso <span className='letraDestaqueVerde'>ERP</span></p>
                        <p class=" font-extralight mt-10 text-4xl ">Chega de ERPs com diversas funcionalidades não usadas.
                    Construímos um capaz de atender todas as suas necessidades que consegue ser simples e fácil de usar.</p>
                    </div>
                    <img src={`${Tablet}`}></img>
                </section>
            </MediaQuery>
        </>
    )
}

export default Section03;