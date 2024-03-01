import homeLogo from '../assets/homeLogo.png'

function Navbar() {
    return (
        <nav class="justify-normal">
            <ul class="flex space-x-28 items-center">
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