import {useContext} from'react'
import womanImg from '../img/home/woman.png'
import {motion} from 'framer-motion'
 import { transition1 } from '../transitions';
 import { cursorContext } from '../context/CursorContext';


const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
   <motion.section 
   initial={{opacity:0, y: '100%'}} 
    animate={{opacity:1, y: 0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
   className='section'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        {/*bg*/}
        <motion.div 
        initial={{opacity:0, y: '100%'}} 
        animate={{opacity:1, y: 0}}
        exit={{opacity:0, y:'100%'}}
        transition={transition1}
        className='hidden lg:flex bg-[#967E76] absolute bottom-0 left-0 right-0 top-72 -z-10'></motion.div>
        {/*text and form*/}
        <div 
        onMouseEnter={mouseEnterHandler} 
        onMouseLeave={mouseLeaveHandler}><h1 className='h1'>contact me</h1>
        <form className='flex flex-col gap-y-4'>
          <div className='flex gap-x-10'>
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#434242]' type="text" placeholder='Sapura Ch' />
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#434242]' type="text" placeholder='sapura.chw@gmail.com' />
          </div>
          <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#434242]' type="text" placeholder='Hello' />
          <button className='btn mb-[30px] mx-auto'>Send</button>
        </form>
        </div>
        {/*img*/}
        <motion.div 
        onMouseEnter={mouseEnterHandler} 
        onMouseLeave={mouseLeaveHandler}
        initial={{opacity:0, y: '100%'}} 
        animate={{opacity:1, y: 0}}
        exit={{opacity:0, y:'100%'}}
        transition={{transition: transition1}}
        className='lg:flex-1'>
          <img src={womanImg} alt="" />
        </motion.div>
      </div>
    </div>

   </motion.section>
  )
}

export default Contact
