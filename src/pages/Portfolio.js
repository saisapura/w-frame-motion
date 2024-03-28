import { useState } from 'react';
import image1 from '../img/portfolio/1.png';
import image2 from '../img/portfolio/2.png';
import image3 from '../img/portfolio/3.png';
import image4 from '../img/portfolio/4.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { projects } from './index';

const Test = () => {
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  const findProjectById = (id) => {
    return projects.find((project) => project.id === id);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section bg-orange-400 overflow-hidden'
    >
      <div className='container mx-auto h-screen flex items-center justify-center relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            style={{ position: 'relative' }}
          >
            <motion.img
              src={image1}
              alt='Image 1'
              initial={{ opacity: 0, y: 100, rotate: 20 }}
              animate={{ opacity: 1, x: 0, y: -50, rotate: 0 }}
              transition={{ ...transition1, delay: 0 }}
              onClick={() => handleImageClick(1)}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            style={{ position: 'relative' }}
          >
            <motion.img
              src={image2}
              alt='Image 2'
              initial={{ opacity: 0, x: 50, y: -50, rotate: -20 }}
              animate={{ opacity: 1, x: -50, y: 0, rotate: 0 }}
              transition={{ ...transition1, delay: 0.5 }}
              onClick={() => handleImageClick(2)}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            style={{ position: 'relative' }}
          >
            <motion.img
              src={image3}
              alt='Image 3'
              initial={{ opacity: 0, x: 0, y: 50, rotate: 20 }}
              animate={{ opacity: 1, x: 50, y: -50, rotate: 0 }}
              transition={{ ...transition1, delay: 1 }}
              onClick={() => handleImageClick(3)}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            style={{ position: 'relative' }}
          >
            <motion.img
              src={image4}
              alt='Image 4'
              initial={{ opacity: 0, x: 50, rotate: -20 }}
              animate={{ opacity: 1, x:0, y: 0, rotate: 0 }}
              transition={{ ...transition1, delay: 1.5 }}
              onClick={() => handleImageClick(4)}
              style={{ cursor: 'pointer', maxWidth: '100%' }}
            />
          </motion.div>
        </div>
        {clickedImage && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <h2>{findProjectById(clickedImage).projectName}</h2>
            <p>{findProjectById(clickedImage).ProjectDescription}</p>
          </div>
        )}
        <motion.p
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 2.5 }}
          style={{ position: 'absolute', bottom: '50%', textAlign: 'center' }}
        >
          <h1 className='h1 text-red-600'>My projects</h1>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Test;
