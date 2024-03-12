//Bibliotecas
import MediaQuery from 'react-responsive';

function iconList(props){
    return(
        <li class="flex flex-row items-center gap-4">
            <img class="w-10" src={props.icone}/>
            <p>{props.children}</p>
        </li>
    )
}

export default iconList;