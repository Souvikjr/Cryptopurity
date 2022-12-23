import React from 'react'

import {motion}  from 'framer-motion';

import './Games.css'

import logo from '../Images/bit1.gif'
import { useNavigate } from 'react-router-dom';

import Footer from '../Footer';


function Games() {

    const navVariants = {
        hidden: {
          opacity: 0,
          y: -50,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
          },
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
          },
        },
      };



      const staggerContainer = (staggerChildren, delayChildren) => ({
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      });




      const textVariant = (delay) => ({
        hidden: {
          y: 50,
          opacity: 0,
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1.25,
            delay,
          },
        },
      });

const navigate= useNavigate()

  return (
    <>
    <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className='Motion py-3 px-5'
    >
        {/* <div className=' gradient1'/> */}



        <div className='navee'>
        {/* <div className='startSection'>
            <button className='bbutton' >back</button>
        </div> */}
        <div className='middleSection'><h1 className='quizz'>QUIZ</h1></div>
        <div className='lastSection'><img src={logo}
                    alt='search'
                    className='imgg'
                    /> </div>
           </div>






        {/* <div className=' nave'>
           
            <button>Back</button>

            <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>Games</h2>

               <img src={logo}
                    alt='search'
                    className='imgg'
                    /> 
        </div> */}

    </motion.nav>



     {/* <section className='section'>
         <motion.div
         variants={staggerContainer}
         initial='hidden'
         whileInView='show'
         viewport = {{once : false , amount : 0.25}}
         className='maind'
         >
            <div className='quiz'>
                <motion.h2 
                  variants={textVariant(1.1)}
                  className='quizheading'
                 >
                    Question are coming from server ans will be somthing . . . !

                </motion.h2>

               
                <div className='row  justify-content-evenly'>
                    <div className='col-md-5 pt-3 pb-3'>
                    <motion.h3 
                        variants={textVariant(1.3)}
                        className='quesheading'
                        >
                       Option 1

                    </motion.h3>
                    </div>
                    <div className='col-md-5 pt-3 pb-3'>
                        
                      <motion.h3 
                        variants={textVariant(1.3)}
                        className='quesheading'
                        >
                          Option 2

                        </motion.h3>
                    </div>
                </div>


            </div>


              <div className='row  justify-content-evenly'>
                    <div className='col-md-5 pt-3 pb-3'>
                    <motion.h3 
                        variants={textVariant(1.3)}
                        className='quesheading'
                        >
                       Option 1

                    </motion.h3>
                    </div>
                    <div className='col-md-5 pt-3 pb-3'>
                        
                      <motion.h3 
                        variants={textVariant(1.3)}
                        className='quesheading'
                        >
                          Option 2

                        </motion.h3>
                    </div>
                </div>



                <div className='row justify-content-evenly'>
                    <div className='col-md-5 pt-3 pb-3'>
                    <motion.h3 
                        variants={textVariant(1.4)}
                        className='quesheading'
                        >
                       Option 3

                    </motion.h3>
                    </div>
                    <div className='col-md-5 pt-3 pb-3'>
                        
                      <motion.h3 
                        variants={textVariant(1.4)}
                        className='quesheading'
                        >
                          Option 4

                        </motion.h3>
                    </div>
                </div>


          
         </motion.div>


     </section> */}




<section  className='section'>
     <motion.div
         variants={staggerContainer}
         initial='hidden'
         whileInView='show'
         viewport = {{once : false , amount : 0.25}}
         className='maind'
         >

            <div className='row justify-content-evenly mbee'>
                <motion.h5 
                  variants={textVariant(1.1)}
                  
                  className='hh'>Read the question properly...! Ans it wisely from below options.</motion.h5>
                    <div className='col-md-4 pt-4'>
                        <motion.p variants={textVariant(1.2)} className='p-2  bor'>Option 1</motion.p>
                        <motion.p variants={textVariant(1.3)} className='p-2  bor'>Option 2</motion.p>
                    </div>
                    <div className='col-md-4 pt-4'>
                        <motion.p variants={textVariant(1.4)} className='p-2 bor'>Option 3</motion.p>
                        <motion.p variants={textVariant(1.5)} className='p-2 bor'>Option 4</motion.p>
                    </div>
                </div>

      </motion.div>
     </section>










     <div className='navee'>
        <div className='startSection1'>
            <button className='bbbutton' onClick={()=>navigate(-1)}><i class="bi bi-arrow-left"></i> Previous</button>
        </div>
        
        {/* <div className='middleSection'><p className='quizzz'>1 2 3 ...</p></div> */}
        <div className='lastSection1'><button className='bbbbutton'>Next <i class="bi bi-arrow-right"></i></button> </div>
         </div>
         <br></br>


     <Footer/>


     </>
  )
}

export default Games