import homeLogo from '../assets/homeLogo.png'

function Navbar() {
    return (
        <nav class="mt-10">
            <ul class="flex justify-center space-x-28 items-center font-Poppins font-light text-3xl">
                <li>
                    <a href="">home</a>
                </li>
                <li>
                    <a href="">sobre</a>
                </li>
                <li>
                    <a href="">
                        <img src={`${homeLogo}`}></img>
                    </a>
                </li>
                <li>
                    <a href="">cases</a>
                </li>
                <li>
                    <a href="">contato</a>
                </li>
            </ul>
        </nav>
    );
  }

  export default Navbar;