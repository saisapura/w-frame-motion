import {useContext} from 'react';
import womanImg from '../img/about/woman.png'
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import { transition1 } from '../transitions';
import { cursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
    <motion.section 
    initial={{opacity:0, y: '100%'}} 
    animate={{opacity:1, y: 0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    className='section'>

      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}  

      
      className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'><img src={womanImg} alt="" />
          </div>
          <motion.div
          initial={{opacity:0, y: '-80%'}} 
          animate={{opacity:1, y: 0}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>about me</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <br/>
          <br/>
          <p className='mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <Link to={'/portfolio'} className='btn'>view my work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
};

export default About;
