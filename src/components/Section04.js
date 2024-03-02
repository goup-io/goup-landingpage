import "../index.css";

function Section04() {
    return (
        <section class=" items-center content-center">
            <div class="w-full">
                <p class=" text-7xl font-Poppins m-auto block w-3/12 text-center"> Por que nos escolher ? </p>
            </div>
            <div class="w-full items-center mt-[8.5%] flex flex-row">
                <div class="w-8/12 background-image: bg-gradient-to-t from-purple-500/45  to-green-400/45  rounded-tr-3xl rounded-br-3xl ">
                    <p class="w-8/12 font-Poppins text-[30px] text-[#D9D9D9] ml-20 py-12 ">
                        Com a nossa ajuda, coletamos e transformamos seus dados em
                        informações que mais tarde, podem ser usadas para tomar melhores
                        decisões no seu negócio. Dessa forma, aumentando a eficiência e
                        diminuindo custos
                    </p>
                </div>
                <div class="w-7/12 font-Poppins flex flex-col ">
                    <ul class="text-3xl w-10/12 text-[#D9D9D9]/40 text-right space-y-12">
                        <li >Análise de Dados •</li>
                        <li >Personalização •</li>
                        <li >Transformação Digital •</li>
                        <li >Design Inteligente •</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section04;
