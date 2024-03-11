import { useState } from "react";

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

    var [textFocusClass, setTextFocus] = useState(textNormal)

    var [barFocusClass, setBarFocus] = useState(barNormal)

    function clickController(){
        
        contador++

        if(contador % 2 == 0){
            setTextFocus(textFocused)
            setBarFocus(barFocused)
            
        }else{
            setTextFocus(textNormal)
            setBarFocus(barNormal)
        }
    }

    return(
        <a onClick={clickController} class="flex flex-col items-end gap-4 cursor-pointer">
        <p style={textFocusClass}>{props.children} •</p>
        <div style={barFocusClass}></div>
        </a>
    )
}

export default TextFocus;