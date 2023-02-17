import React from 'react'
import images from '../exports/Images'
import '../styles/slider.css'
import {motion} from "framer-motion"

export const Home = () => {


  return(
    
      <>
    
          <motion.div className='slider-container'>
            <motion.div className='slider' drag= 'x' dragConstraints={{right: 0, left:21}}>
            {images.map(image =>(
              <motion.div className='item'>
                <img src={image} alt=''/>
                </motion.div>
            ))}
            </motion.div>
          <center><div>
            LOS MEJORES PRODUCTOS PARA CUIDADO MASCULINO EN BARBERIAS TAPATIAS
            <p></p>
            </div></center>  
          </motion.div >

          
      </>
  )
}
export default Home