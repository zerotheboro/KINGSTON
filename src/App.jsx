import { useState } from 'react'
import Header from './Header'
import img from './assets/download.png'

function App() {
  return (
    <>
      <Header/>
      <body>

        <section className='good'>

          <section className='attribute'>
            <h2>BOXITO CAN STORE UP TO 7KG</h2>
            <video src=''>
              <source alt="video of me weighing the A level book" src=''></source>
            </video>
          </section>
          
       </section>

        <div className='border'></div>

        <section className='service'>

          <h1>100% WON'T REGRET USING IT</h1>

          <section className='attribute'>
            <h2>Fast Free Fixing</h2>
            <img src='' title='I hold the gear box'></img>
          </section>

          <section className='attribute'>
            <h2>Customization</h2>
            <img src='' title='SHOW DIFFERENT BOX WITH DIFFERENT SIZE'></img>
          </section>

          <section className='attribute'>
            <h2>Try for 7 days</h2>
            <img src=''></img>
          </section>

        </section>
      </body>
    </>
  )
}

export default App
