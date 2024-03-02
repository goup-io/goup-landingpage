import './Animations.css'

function Hover(props){
    return (
        <div class="group">
            <a href={props.url} class="">{props.content}</a>
            <div class="bg-verdeGoUp transition-all delay-150 h-0.5 w-0 group-hover:w-4/5 "></div>
        </div>
    )
}

export default Hover;
