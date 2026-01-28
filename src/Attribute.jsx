

function Atribute(props){
    return(
        <>
        <section className={`attribute ${props.side}`}>
             <h2>{props.header}</h2>
             <img src={props.src} title={props.title}></img>
             <p>{props.para}</p>
        </section>
        </>
    )
}
export default Atribute;