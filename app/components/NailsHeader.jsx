//Routing
import {NavLink} from '@remix-run/react';
//Icons
import {userIcon, cartIcon} from './icons';
//Images
import line1 from '../images/line1.png';
//Components
import {Offer} from './Offer';

export function NailsHeader() {
  return (
    <header class="relative p-3 flex justify-between items-center text-xl">
      <img
        loading="eager"
        className="select-none absolute -left-20 -bottom-5 -z-20 w-[20vw]"
        src={line1}
        alt="linea"
        width="1709"
        height="279"
      />
      <h1 class="text-5xl">VNails</h1>
      <nav class="flex">
        <Offer title="OFERTA 10%" text="Por tiempo limitado" />
        <ul class="flex gap-5 items-center select-none">
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
      </nav>
    </header>
  );
}
