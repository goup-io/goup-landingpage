//Bibliotecas
import { useState } from 'react';
import MediaQuery from 'react-responsive';

function iconList(props){

    

    return(
        <li class="flex flex-row items-center gap-8">
            <MediaQuery maxWidth={1024}>
                <img class="w-9" src={props.icone}/>
                <p>{props.children}</p>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
                <img class="w-12" src={props.icone}/>
                <p>{props.children}</p>
            </MediaQuery>
        </li>
    )
}

export default iconList;