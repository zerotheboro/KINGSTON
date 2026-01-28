import { useState } from 'react'
import Header from './Header';
import Atribute from './Attribute';
import Footer from './Footer';
import custom from './assets/custom.jpg'
import seven from './assets/7days.jpg'
import fix from './assets/fix.svg'
import img from './assets/download.png'
import weight from './assets/weight.png'
import rubik from './assets/rubik.png'
import { useEffect } from "react";



function App() {
  useEffect(() => {
    const observor = new IntersectionObserver(() => {
      
    }, {

    })
  }, [])
  return (
    <>
      <Header/>
      <body>

        <section className='good'>

          <Atribute header="BOXITO can store up to 7kg" side="right" src={weight} para="It can hold around 7 kg"/>

          <Atribute header='Customization' side="left" src={rubik} para="just like a rubik cubes I can customize accroding to how u want to use it"/>
          
       </section>

        <div className='border'></div>

        <section className='service'>

          <h1>0% REGRET USING IT</h1>

          <Atribute header='Fast Free Fixing' side="right" src={fix} para="IF ur box were to be broken I can come and fix ur box in the matters of 1-3days and for free"/>

          <Atribute header="Try for 7 days" side="left" src={seven} para="u can try my product to see how it upgrades ur working space for 7days"/>

        </section>
      </body>
      <div className='border foot'></div>
      <Footer/>
    </>
  )
}

export default App
