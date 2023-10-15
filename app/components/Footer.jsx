//Routing
import {NavLink} from '@remix-run/react';

//Icons
import {instagramIcon, facebookIcon, twitterIcon} from './icons';

export function Footer() {
  return (
    <footer className="flex flex-col p-20 gap-10">
      <div className="flex items-center">
        <div className="w-1/3 h-[3px] bg-[#00000011] mx-20"></div>
        <div className="w-1/3 text-center text-[1.1vw]">
          Vietnamese Nails <br></br>
          <span className="font-satisfy">Beauty</span>
        </div>
        <div className="w-1/3 h-[3px] bg-[#00000011] mx-20"></div>
      </div>
      <nav className="flex">
        <ul className="w-1/3  mx-20 flex flex-col items-center gap-3 font-satisfy text-[1vw]">
          <li>
            <NavLink to="#">Política de privacidad</NavLink>
          </li>
          <li>
            <NavLink to="#">Términos y condiciones</NavLink>
          </li>
          <li>
            <NavLink to="#">Sobre nosotros</NavLink>
          </li>
        </ul>
        <div className="w-1/3 flex justify-center items center gap-20">
          <NavLink to="#">{instagramIcon}</NavLink>
          <NavLink to="#">{facebookIcon}</NavLink>
          <NavLink to="#">{twitterIcon}</NavLink>
        </div>
        <ul className="w-1/3  mx-20 flex flex-col items-center gap-3 font-satisfy text-[1vw]">
          <li>
            <NavLink to="#">Más información</NavLink>
          </li>
          <li>
            <NavLink to="#">Devoluciones</NavLink>
          </li>
          <li>
            <NavLink to="#">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
