import {useContext} from 'react';
import {ImTwitter, ImPinterest,ImYoutube} from 'react-icons/im' 
import { cursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
  <div 
  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href="#" target='_blank'><ImTwitter/></a></li>
      <li><a href="#" target='_blank'><ImPinterest/></a></li>
      <li><a href="#" target='_blank'><ImYoutube/></a></li>
      
    </ul>
  </div>)
};

export default Socials;
