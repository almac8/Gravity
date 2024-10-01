import { useState } from 'react';
import './LeftMenu.css';

const LeftMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div id='LeftMenu' className={isOpen ? 'openMenu' : 'closedMenu'}
    onMouseEnter={ () => setIsOpen(true) }
    onMouseLeave={ () => setIsOpen(false) }>
      <h1>Left Menu</h1>
    </div>
  )
};

export default LeftMenu;