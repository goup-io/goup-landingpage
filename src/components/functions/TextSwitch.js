
function TextSwitch(props){

    var textoAnalise = 
    "Com a nossa ajuda, coletamos e transformamos seus dados em informações que mais tarde, podem ser usadas para tomar melhores decisões no seu negócio. Dessa forma, aumentando a eficiência e diminuindo custos"

    if(props.idAtivo == 2){
        var textoRetorno = "Passou no 2"

    }else if(props.idAtivo == 3){
        var textoRetorno = "Passou no 3"

    }else if(props.idAtivo == 4){
        var textoRetorno = "Passou no 4"

    }else {
        var textoRetorno = textoAnalise
    }

    return(
        <p class="w-8/12 font-Poppins text-4xl tracking-wide leading-normal ml-20 py-12">
            {textoRetorno}
        </p>
    )
}

export default TextSwitch;