"use client"

import {motion} from 'framer-motion'
export const Contact = ()=> {
    return (
      <section id='connect' className='overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4'>
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className='grid lg:grid-cols-2 gap-16'
        >
          
        <div className="space-y-12">
          <motion.h2
            initial= {{opacity:0, x:-20}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.6, delay: 0.2}}
            className='text-7xl font-bold text-gray-300'
          >
            Get in <span className='text-purple-500'>touch</span>

          </motion.h2>

          <motion.div
           initial= {{opacity:0, x:-20}}
           whileInView={{opacity: 1, x:0}}
           transition={{duration: 0.6, delay: 0.4}}
           className='glass p-8 rounded-2xl space-y-8'
          >
            <div className="space-y-2">
              <p className='text-lg text-gray-300'>Phone</p>
              <a
              href='tel: +33760055033'
              className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                +33760055033
                <span className='text-gray-500'></span>
              </a>

            </div>

            <div className="space-y-2">
              <p className='text-lg text-gray-300'>Email</p>
              <a
              href='mailto: kinan.alaridi@gmail.com'
              className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                kinan.alaridi@gmail.com
                <span className='text-gray-500'></span>
              </a>

            </div>

            <div className="space-y-2">
              <p className='text-lg text-gray-300'>office</p>
              <address className='text-xl not-italic leading-relaxed'>
                France  <br></br>
                - Strasbourg <br></br>

              </address>
            </div>

          </motion.div>
        </div>

        <motion.div
           initial= {{opacity:0, x:20}}
           whileInView={{opacity: 1, x:0}}
           transition={{duration: 0.6, delay: 0.6}}
           className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168967.90189394166!2d7.597270596032543!3d48.56918400329407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8495e18b2c1%3A0x971a483118e7241f!2sStrasbourg!5e0!3m2!1sfr!2sfr!4v1731310423140!5m2!1sfr!2sfr"
              width='100%'
              height= '100%'
              style={{border:0}}
              allowFullScreen
              loading='lazy'
            >

            </iframe>

            </motion.div>

        </motion.div>
      </section>
    )
  }