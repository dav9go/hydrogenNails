//Routing
import {NavLink} from '@remix-run/react';
//Icons
import {userIcon, cartIcon} from '../icons';
//Images
import line1 from '../../images/line1.png';
//Components
import {MenuBurger} from './MenuBurger';

export function NailsHeader() {
  return (
    <header class="fixed w-full top-0 p-3 flex justify-between items-center text-xl bg-gradient-to-b from-white from-10% via-white via-70% to-transparent z-[1000]">
      <img
        loading="eager"
        className="select-none absolute -left-20 -bottom-10 -z-20 w-[400px]"
        src={line1}
        alt="linea"
        width="1709"
        height="279"
      />
      <h1 class="text-5xl">SuNails</h1>
      <nav class="flex">
        <ul class="hidden lg:flex gap-5 items-center select-none">
          <li>
            <NavLink
              href="/"
              className="lg:hover:text-[#e7c6ff] transition-all"
            >
              Showcase
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/manicura"
              className="lg:hover:text-[#e7c6ff] transition-all"
            >
              Manicura
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#"
              className="lg:hover:text-[#e7c6ff] transition-all"
            >
              Colección
            </NavLink>
          </li>
          {/*<li>{userIcon}</li>
          <li>{cartIcon}</li>*/}
        </ul>
        <MenuBurger />
      </nav>
    </header>
  );
}
