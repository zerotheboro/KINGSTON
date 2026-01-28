import facebook from './assets/facebook.svg';
import IG from './assets/IG.png';
import youtube from './assets/youtube.svg';
import gmail from './assets/gmail.svg';

const list_of_contact = [
    {
        image : facebook,
        scr: "https://www.facebook.com/teo.tr.2025/"

    },

    {
        image : youtube,
        scr: "https://www.youtube.com/@gunnychannel204"
    },
    {
        image : gmail,
        scr : "mailto:2002070343@royal.edu.vn"
    },
    {
        image : IG,
        scr : "https://www.instagram.com/kingston_bussiness/"
    }
];
let divs_of_contacts = list_of_contact.map((source) => <div><a href={source.scr} target='_blank'><img src={source.image}/></a></div>)




function Footer(){
    return(
        <>
        <div className='footer_border'></div>
        <footer id="FOOTER">
            <div id="contact">
                {divs_of_contacts}
            </div>
            <div>
                <h2>phone number:</h2><h1>0909528511</h1>
            </div>
        </footer>
        </>
    )
}

export default Footer