import { useContext } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cursorContext } from './context/CursorContext';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(cursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Wrap the motion component around the cursor div */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      >
      </motion.div>
    </>
  );
};
export default App;
