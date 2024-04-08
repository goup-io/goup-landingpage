import { useEffect, useState } from "react";

var transitionDelay = '.3s ease-in-out'


var textFocused2 = {
    fontSize: "1.5rem",
    transition: transitionDelay,
}

var textNormal2 = {
    transition: transitionDelay,
    fontSize : '1.4rem',
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

function TextFocus2(props){

    const [textFocusClass, setTextFocus] = useState(textNormal2)

    const [barFocusClass, setBarFocus] = useState(barNormal)    

    useEffect(() => {
        if (props.idAtivo == props.id) {
            setTextFocus(textFocused2)
            setBarFocus(barFocused)

        } else {
            setTextFocus(textNormal2)
            setBarFocus(barNormal)
        }
    }, [props.idAtivo])

    function clickController(){
        
        props.atualizarIdAtivo(props.id);

    }

    return(
        <a onClick={clickController} class="flex justify-center flex-col items-center gap-4 cursor-pointer">
            <p style={textFocusClass}>{props.children} •</p>
            <div style={barFocusClass}></div>
        </a>
    )
}



export default TextFocus2;