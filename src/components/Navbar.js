//Imagens
import homeLogo from '../assets/homeLogo.png'
import Hover from '../components/functions/Hover';
import Hamburguer from '../assets/hamburguer.png'

//Bibliotecas
import MediaQuery from 'react-responsive';

function Navbar() {
    return (
        <>
        <MediaQuery maxWidth={1024}>
            <nav class="flex justify-center items-center gap-12 mt-10">
                <img src={Hamburguer} class="w-10"/>
                <div class="w-3/5">
                    <img src={homeLogo}/>
                </div>
            </nav>
        </MediaQuery>
        <MediaQuery minWidth={1025}>
            <nav class="mt-10" id="navbar">
                <ul class="flex justify-center space-x-20 items-center font-Poppins font-light text-3xl">
                    <li>
                        <Hover content="home" url="#navbar"/>
                    </li>
                    <li>
                        <Hover content="sobre" url="#sobre"/>
                    </li>
                    <li>
                        <a href="">
                            <img src={`${homeLogo}`}></img>
                        </a>
                    </li>
                    <li>
                        <Hover content="cases" url="#cases"/>
                    </li>
                    <li>
                         <Hover content="contato" url="#footer"/>
                    </li>
                </ul>
            </nav>
        </MediaQuery>
        </>
    );
  }

  export default Navbar;