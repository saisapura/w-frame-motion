import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { about } from './index'; // Import your about data from index file

import image1 from '../img/portfolio/1.png';
import image2 from '../img/portfolio/2.png';
import image3 from '../img/portfolio/3.png';
import image4 from '../img/portfolio/4.png';

const Test2 = () => {
    const [selectedItems, setSelectedItems] = useState([1]);

    // Function to handle image click event
    const handleImageClick = (id) => {
        setSelectedItems([id]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className='bg-red-300 flex'
        >
            {/* Images Container */}
            <div className='container w-1/2 h-screen flex items-center justify-center relative p-4'>
                <motion.div
                    className="image-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0 }}
                >
                    <motion.img
                        src={image1}
                        alt="Image 1"
                        className={`w-full ${selectedItems.includes(1) ? '' : 'filter grayscale'}`}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        onClick={() => handleImageClick(1)}
                    />
                    <motion.img
                        src={image2}
                        alt="Image 2"
                        className={`w-full ${selectedItems.includes(2) ? '' : 'filter grayscale'}`}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        onClick={() => handleImageClick(2)}
                    />
                    <motion.img
                        src={image3}
                        alt="Image 3"
                        className={`w-full ${selectedItems.includes(3) ? '' : 'filter grayscale'}`}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        onClick={() => handleImageClick(3)}
                    />
                    <motion.img
                        src={image4}
                        alt="Image 4"
                        className={`w-full ${selectedItems.includes(4) ? '' : 'filter grayscale'}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        onClick={() => handleImageClick(4)}
                    />
                </motion.div>
            </div>

            {/* "About me" Container */}
            <div className='w-full sm:w-1/2  h-screen flex flex-col justify-center'>
            <motion.h1 
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    style={{ position: 'absolute', top: '20%' }}
    className={`h1 opacity-75 ${selectedItems.length > 0 ? 'md:top-1/4' : ''}`}
>
    About me.
</motion.h1>

<motion.div 
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ ...transition1, delay: 0.2 }}
    style={{ position: 'absolute', top: '40%' }} // Adjust top position as needed
    key={selectedItems}     
>
    {selectedItems.map((item) => (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition1, delay: 0.2 }}
            className='w-full md:w-1/2 pr-4 fle'
            key={item}
        >
            <motion.h2 className="text-xl font-semibold">{about[item - 1].title}</motion.h2>
            <motion.p>{about[item - 1].description}</motion.p>
        </motion.div>
    ))}
</motion.div>
            </div>
        </motion.section>
    );
};

export default Test2;
