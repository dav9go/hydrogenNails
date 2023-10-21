//Hooks
import {useState, useEffect} from 'react';
//Icons
import {menuIcon, closeIcon} from '../icons';
//Component
import {NavLink} from '@remix-run/react';

export function MenuBurger() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (menuOpened) {
      setTimeout(() => {
        setShow(true);
      }, '50');
    } else {
      setTimeout(() => {
        setShow(false);
      }, '50');
    }
  }, [menuOpened]);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`flex lg:hidden transition-all duration-100 ${
          menuOpened ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {menuIcon}
      </button>
      <div
        className={`flex fixed lg:hidden transition-all duration-1000 ${
          menuOpened ? '-top-full' : 'top-full'
        }  -left-32 w-[400vw] h-[400vh] bg-[#e7c6ff] z-50 rounded-full`}
      ></div>
      <div
        className={`flex fixed lg:hidden transition-all duration-1000 ${
          menuOpened ? '-bottom-full' : 'bottom-full'
        }  -right-32 w-[400vw] h-[400vh] bg-[#000000AA] z-10 rounded-full`}
      ></div>
      {menuOpened && (
        <nav className="fixed flex justify-center items-center left-0 z-50 w-full h-full">
          <ul className="flex flex-col lg:hidden gap-10 items-center select-none text-2xl">
            <li
              className={`${
                show ? 'opacity-100' : 'opacity-0'
              } transition-all duration-1000`}
            >
              <NavLink href="/">Showcase</NavLink>
            </li>
            <li
              className={`${
                show ? 'opacity-100' : 'opacity-0'
              } transition-all duration-[1500ms]`}
            >
              <NavLink href="/manicura">Manicura</NavLink>
            </li>
            <li
              className={`${
                show ? 'opacity-100' : 'opacity-0'
              } transition-all duration-[2000ms]`}
            >
              <NavLink href="#">Colección</NavLink>
            </li>
          </ul>
        </nav>
      )}

      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`fixed lg:hidden ${
          menuOpened ? 'opacity-100' : 'opacity-0'
        } transition-all duration-1000  top-[0.75rem] right-[0.75rem] z-50`}
      >
        {closeIcon}
      </button>
    </>
  );
}
