import { useEffect, useState } from "react";

var contador = 1;
var transitionDelay = '.3s ease-in-out'

var textFocused = {
    fontSize: "2.9rem",
    transition: transitionDelay,
}

var textNormal = {
    transition: transitionDelay,
    fontSize : '2.4rem',
    color : '#f1f1f161',
}

var barFocused = {
    transition: transitionDelay,
    backgroundColor: '#48CFAE',
    width : '60%',
    height : '.3rem'
}

var barNormal = {
    transition: transitionDelay,
    backgroundColor: '#48CFAE',
    width : '0px',
    height : '.2rem'
}

function TextFocus(props){

    const [textFocusClass, setTextFocus] = useState(textNormal)

    const [barFocusClass, setBarFocus] = useState(barNormal)
    
    const [contador, setContador] = useState(0)
    

    useEffect(() => {
        if (props.idAtivo === props.id) {
            setTextFocus(textFocused)
            setBarFocus(barFocused)
        } else {
            setTextFocus(textNormal)
            setBarFocus(barNormal)
        }
    }, [props.idAtivo])

    function clickController(){
        
        props.atualizarIdAtivo(props.id);

    }

    return(
        <a onClick={clickController} class="flex flex-col items-end gap-4 cursor-pointer">
            <p style={textFocusClass}>{props.children} •</p>
            <div style={barFocusClass}></div>
        </a>
    )
}

export default TextFocus;