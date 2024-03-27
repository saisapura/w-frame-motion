import {useContext} from 'react';
import image1 from '../img/portfolio/1.png'
import image2 from '../img/portfolio/2.png'
import image3 from '../img/portfolio/3.png'
import image4 from '../img/portfolio/4.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { transition1 } from '../transitions';
import { cursorContext } from '../context/CursorContext';


const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
    <motion.section 
    initial={{opacity:0, y: '100%'}} 
    animate={{opacity:1, y: 0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    className='section'>
      <div className='container mx-auto h-full relative'>
         <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div 
          onMouseEnter={mouseEnterHandler}  onMouseLeave={mouseLeaveHandler}
          initial={{opacity:0, y: '-80%'}} 
          animate={{opacity:1, y: 0}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}
          className='flex flex-col lg:items-start'>
            <h1 className='h1'>Porfolio</h1>
            <p className='mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br/>
          <p className='mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
          </motion.div>

          <div 
           onMouseEnter={mouseEnterHandler}  onMouseLeave={mouseLeaveHandler} className='grid grid-cols-2 lg:gap-2'>
          <div className='max-w-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-slate-600 overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt="" />
          </div>

            <div className='max-w-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-slate-600 overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image2} alt="" />
            </div>

            <div className='max-w-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-slate-600 overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image3} alt="" />
            </div>

            <div className='max-w-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-slate-600 overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image4} alt="" />
            </div>
          </div>
        </div>

       </div> 
    </motion.section>
  )
};

export default Portfolio;
