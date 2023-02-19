import React from 'react'
import images from '../exports/Images'
import '../styles/slider.css'
import {motion} from "framer-motion"

export const Home = () => {


  return(
    
      <>
    
          <motion.div className='slider-container'>
          <center>
          LOS MEJORES PRODUCTOS PARA CUIDADO MASCULINO EN BARBERIAS
            <p> Estamos viviendo un regreso al excesivo cuidado facial y corporal masculino, ahora ellos son los que buscan verse cada vez mejor. Por ello daremos a conocer las marcas mas representativas para el cuidado masculino en Antioquia Dentro de sus productos ofrecen lociones, bálsamos, jabones y aceites para el cuidado de la barca y cabello. Se han posicionado gracias a su gran variedad de aromas y su excelente calidad.
            Gracias a su trabajo constante y gran calidad en productos, estas son algunas de las mejores marcas tapatías que refuerzan el auge que tiene el cuidado masculino en nuestros tiempos.
            </p>
            </center>  

            <motion.div className='slider' drag= 'x' dragConstraints={{right: 0, left:21}}>
            {images.map(image =>(
              <motion.div className='item'>
                <img src={image} alt=''/>
                </motion.div>
            ))}
            
            </motion.div>
          </motion.div >
          
          
      </>
  )
}
export default Home