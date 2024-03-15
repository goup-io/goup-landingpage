//Imagens
import { useState } from 'react'
import { useEffect } from 'react'
import TabletBackground from '../assets/TabletBackground.png'

var transitionDelay = '.3s ease-in-out'

var tabletFocused = {
    width: '35rem',
    height : '60rem',
    marginTop : "-2rem",
    opacity : 1,
    transition: transitionDelay,
}

var tabletNotFocused = {
    width: '35rem',
    height : '60rem',
    opacity: 0.5,
    transition: transitionDelay,
}

function Tablet(props){

    const [tabletStyle, setTabletStyle] = useState(tabletNotFocused)

    useEffect(() => {
        if (props.idTabletAtivo == props.id) {
            setTabletStyle(tabletFocused)

        } else {
            setTabletStyle(tabletNotFocused)
        }
    }, [props.idTabletAtivo])

    function hoverController(){
        props.setIdTabletAtivo(props.id)
    }

    return (
        <div style={tabletStyle} onMouseOver={hoverController}>
            <img class="absolute z-[-1] w-[35rem] h-[50rem]" src={TabletBackground}></img>
            <div class="p-12">
                <p>{props.children}</p>
            </div>
        </div>
    )

}

export default Tablet