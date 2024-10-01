import { useState } from 'react';
import './RightMenu.css';

const RightMenu = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div id='RightMenu' className={isOpen ? 'openMenu' : 'closedMenu'}
    onMouseEnter={ () => setIsOpen(true) }
    onMouseLeave={ () => setIsOpen(false) }>
      <h1>Right Menu</h1>
    </div>
  )
};

export default RightMenu;