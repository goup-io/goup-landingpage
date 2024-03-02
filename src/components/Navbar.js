import homeLogo from '../assets/homeLogo.png'
import Hover from '../components/functions/Hover';

function Navbar() {
    return (
        <nav class="mt-10" id="navbar">
            <ul class="flex justify-center space-x-28 items-center font-Poppins font-light text-3xl">
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
    );
  }

  export default Navbar;