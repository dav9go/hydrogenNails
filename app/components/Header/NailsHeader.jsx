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
    <header class="relative p-3 flex justify-between items-center text-xl">
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
            <NavLink href="/">Showcase</NavLink>
          </li>
          <li>
            <NavLink href="/manicura">Manicura</NavLink>
          </li>
          <li>
            <NavLink href="#">Colección</NavLink>
          </li>
          <li>{userIcon}</li>
          <li>{cartIcon}</li>
        </ul>
        <MenuBurger />
      </nav>
    </header>
  );
}
