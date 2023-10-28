//Routing
import {NavLink} from '@remix-run/react';

//Icons
import {instagramIcon, facebookIcon, twitterIcon} from './icons';

export function Footer() {
  return (
    <footer className="flex flex-col p-20 gap-10">
      <div className="flex items-center">
        <div className="hidden md:block w-1/3 h-[3px] bg-[#00000011] mx-20"></div>
        <div className="w-full md:w-1/3 text-center text-xl">
          Vietnamese Nails <br></br>
          <span className="font-satisfy">Beauty</span>
        </div>
        <div className="hidden md:block w-1/3 h-[3px] bg-[#00000011] mx-20"></div>
      </div>
      <div className="md:hidden  h-[3px] bg-[#00000011] mx-10"></div>
      <div className=" lg:hidden flex justify-center items-center gap-20">
        <NavLink aria-label="Echa un ojo a nuestras fotos en instagram" to="#">
          {instagramIcon}
        </NavLink>
        <NavLink aria-label="Visita nuestro facebook" to="#">
          {facebookIcon}
        </NavLink>
        <NavLink aria-label="Leenos en twitter" to="#">
          {twitterIcon}
        </NavLink>
      </div>
      <nav className="flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-0">
        <ul className="w-full md:w-1/2  lg:w-1/3  mx-5 lg:mx-20 flex flex-col items-center gap-3 font-satisfy text-sm">
          <li>
            <NavLink aria-label="Política de privacidad" to="/politica">
              Política de privacidad
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Términos y condiciones" to="/terminos">
              Términos y condiciones
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Más sobre nosotros" to="#">
              Sobre nosotros
            </NavLink>
          </li>
        </ul>
        <div className="w-1/3 hidden lg:flex justify-center items center gap-20">
          <NavLink aria-label="Visita nuestro instagram" to="/contacto">
            {instagramIcon}
          </NavLink>
          <NavLink aria-label="Echa un ojo a nuestro facebook" to="/contacto">
            {facebookIcon}
          </NavLink>
          <NavLink aria-label="Leenos en twitter" to="/contacto">
            {twitterIcon}
          </NavLink>
        </div>
        <ul className="w-full md:w-1/2  lg:w-1/3  mx-5 lg:mx-20 flex flex-col items-center gap-3 font-satisfy text-sm">
          <li>
            <NavLink aria-label="Más información" to="/informacion">
              Más información
            </NavLink>
          </li>
          <li>
            <NavLink to="#">Devoluciones</NavLink>
          </li>
          <li>
            <NavLink aria-label="Página de contacto" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
