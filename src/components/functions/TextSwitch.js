
function TextSwitch(props){

    var textoAnalise = "Com a nossa ajuda, coletamos e transformamos seus dados em informações que mais tarde, podem ser usadas para tomar melhores decisões no seu negócio. Dessa forma, aumentando a eficiência e diminuindo custos."

    var textoPersonalizacao = "Apartir do momento que estabelecemos contato, temos como objetivo analisar e resolver o seu problema de de forma individual. Oferecemos uma solução exclusiva de acordo com suas demandas e necessidades."

    var textoTransformacao = "Com o avanço da técnologia, fica cada vez mais fácil de resolver os seus problemas usando as ferramentas mais populares do mercado."

    var textoDesign = "Estaremos a todo momento em contato com você para garantir que o seus problemas sejam resolvidos da maneira mais eficiente possível, e ainda assim com uma interface intuitiva."

    if(props.idAtivo == 2){
        var textoRetorno = textoPersonalizacao

    }else if(props.idAtivo == 3){
        var textoRetorno = textoTransformacao

    }else if(props.idAtivo == 4){
        var textoRetorno = textoDesign

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