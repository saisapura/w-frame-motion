import {useContext} from 'react';
import {ImTwitter, ImGithub, ImPinterest} from 'react-icons/im' 
import { cursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
  <div 
  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href="https://github.com/saisapura" target='_blank' rel="noopener noreferrer"><ImGithub/></a></li>
      <li><a href="https://twitter.com/i/flow/login" target='_blank' rel="noopener noreferrer"><ImTwitter/></a></li>
      <li><a href="https://pl.pinterest.com/" target='_blank' rel="noopener noreferrer"><ImPinterest/></a></li>
  
      
    </ul>
  </div>)
};

export default Socials;
