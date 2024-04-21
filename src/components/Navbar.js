//Imagens
import homeLogo from '../assets/homeLogo.png'
import Hover from '../components/functions/Hover';
import Hamburguer from '../assets/hamburguer.png'
import { useState } from 'react';

//Bibliotecas
import MediaQuery from 'react-responsive';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MediaQuery maxWidth={1024}>
                <nav className="navbar bg-base-100 flex items-center justify-between relative">
                    <div className="dropdown mt-8">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={handleMenuClick}>
                            <img src={Hamburguer} className="h-6 w-6" />
                        </div>
                        {isOpen && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href="#navbar">Home</a></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#cases">Cases</a></li>
                                <li><a href="#footer">Contato</a></li>
                            </ul>
                        )}
                    </div>
                    <div className="w-3/5 mt-8 mr-12 ">
                        <img src={homeLogo}  />
                    </div>
                </nav>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <nav class="mt-10" id="navbar">
                    <ul class="flex justify-center space-x-20 items-center font-Poppins font-light text-3xl">
                        <li>
                            <Hover content="home" url="#navbar" />
                        </li>
                        <li>
                            <Hover content="sobre" url="#sobre" />
                        </li>
                        <li>
                            <a href="">
                                <img src={`${homeLogo}`}></img>
                            </a>
                        </li>
                        <li>
                            <Hover content="cases" url="#cases" />
                        </li>
                        <li>
                            <Hover content="contato" url="#footer" />
                        </li>
                    </ul>
                </nav>
            </MediaQuery>
        </>
    );
}

export default Navbar;