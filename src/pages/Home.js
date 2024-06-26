  import { useContext } from 'react';
import WomanImg from '../img/home/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'
import { cursorContext } from '../context/CursorContext';
import resume from '../SAPURA CH_CV.pdf'

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);

  return (
    <motion.section 
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={transition1}
    className='section bg-[#9BABB8]'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>

          <motion.div 
          initial={{opacity:0, y: '-50%'}} 
          animate={{opacity:1, y: 0}}
          exit={{opacity:0, y:'-50%'}}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          
          className='w-full pt-36 pb-14 lg:pt-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1 mb-8'>
              Frontend Dev.<br/>& Web Designer
            </h1>
            
            <Link to={resume} target="_blank" rel="noopener noreferrer" className='btn mb-[30px]'>Get Resume</Link>

          </motion.div>
          
          <div className='flex justify-end max-h-96 lg:max-h-max'>
             <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              exit={{scale:0}}
              transition={{ transition1 }}
            
              
              className='relative lg:-right-40 overflow-hidden'>
              <motion.img whileHover={{scale: 1.1}}
              transition={transition1} src={WomanImg} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Home;
