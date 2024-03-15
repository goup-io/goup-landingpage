//Imagens
import TabletBackground from '../assets/TabletBackground.png'
import ImagemAux01 from '../assets/Ecommerce web page-cuate 1.png'

function Tablet(props){
    return (
        <div class="w-[35rem] h-[60rem]">
            <img class="absolute z-[-1] w-[35rem] h-[50rem]" src={TabletBackground}></img>
            <div class="p-12">
                <p>{props.children}</p>
            </div>
        </div>
    )

}

export default Tablet