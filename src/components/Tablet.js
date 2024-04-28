//Imagens
import { useState } from 'react'
import { useEffect } from 'react'
import TabletBackground from '../assets/TabletBackground.png'

var transitionDelay = '.3s ease-in-out'


var tabletWidth = "full"

var tabletFocused = {
    width: tabletWidth,
    height : '25rem',
    marginTop : "-4rem",
    opacity : 1,
    transition: transitionDelay,
}

var tabletNotFocused = {
    width: tabletWidth,
    height : '25rem',
    opacity: 0.5,
    transition: transitionDelay,
}

function Tablet(props){

    const [tabletStyle, setTabletStyle] = useState(tabletNotFocused)

    useEffect(() => {
        if (props.idTabletAtivo == props.id) {
            setTabletStyle(tabletFocused)

        }
        else if(props.idTabletAtivo == 0){
            setTabletStyle(tabletFocused)
        } 
        else {
            setTabletStyle(tabletNotFocused)
        }
    }, [props.idTabletAtivo])

    function hoverInController(){
        props.setIdTabletAtivo(props.id)
    }

    function hoverOutController(){
        props.setIdTabletAtivo(0)
    }

    return (
        <div style={tabletStyle} onMouseOver={hoverInController} onMouseLeave={hoverOutController}>
            <img class="absolute ml-3 z-[-1] w-[22.5rem] h-[30rem]" src={TabletBackground}></img>
            <div class="p-8">
                <p>{props.children}</p>
            </div>
        </div>
    )

}

export default Tablet;