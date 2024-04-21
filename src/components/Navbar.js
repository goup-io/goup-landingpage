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

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <MediaQuery maxWidth={1024}>
                <div className="flex items-center justify-between mt-8">
                    <nav className='flex ml-4 '>
                            <div
                                className="HAMBURGER-ICON"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <div>
                                    <img src={Hamburguer} alt="menu" />
                                </div>
                            </div>
                    </nav>
                    <a className='mr-2' href="/">
                        <img src={homeLogo} alt="logo" />
                    </a>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            onClick={() => setIsNavOpen(false)}
                        >
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#navbar">Home</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#sobre">Sobre</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#cases">Cases</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                                <a href="#footer">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
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