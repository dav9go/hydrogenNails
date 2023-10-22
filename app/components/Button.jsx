//Routing
import {NavLink} from '@remix-run/react';

export function Button({text}) {
  return (
    <div className="flex justify-center items-center">
      <NavLink
        href="#"
        className="flex justify-center items-center bg-black hover:bg-[#e7c6ff] hover:text-black transition-colors py-2 px-4 text-white rounded-[24px] w-full max-w-[240px] lg:w-[240px]"
      >
        {text}
      </NavLink>
    </div>
  );
}
