import img from './assets/download.png'

export default function Header(){
    return(
        <header>
            <section className='HERO'>
                <h1 className='hey'>BOXITO</h1>
                <img src={img} title='BOXITO'/>
                <h1 className='hoy'>2X UR LEARNING SPACE</h1>
            </section>
        </header>
    )
}