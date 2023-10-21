//Typed
import Typed from 'typed.js';
//Hooks
import {useRef, useEffect} from 'react';
//Images
import manicura2 from '../images/manicura2.jpeg';
import manicura3 from '../images/manicura3.jpeg';
import manicura4 from '../images/manicura4.jpeg';

export function Hero() {
  const titleRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['ÚNICOS', 'ELEGANTES', 'PARA TÍ ^5000'],
      typeSpeed: 80,
      loop: true,
    };
    typedRef.current = new Typed(titleRef.current, options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <>
      <div className="p-5 lg:pl-10 lg:pt-10 lg:pb-10  w-full xl:w-[40%] flex text-[15vw] xl:text-[5.5vw] font-semibold  py-10 xl:py-36">
        <p className="xl:leading-[7.5vw] -z-20">
          <span>NUESTROS</span> <br></br>
          <span>DISEÑOS</span> <br></br>
          <span ref={titleRef}>ÚNICOS</span>
        </p>
      </div>
      <div className="w-full xl:w-[60%]  lg:px-10 xl:pr-10 flex flex-col items-center justify-center gap-10 xl:gap-0">
        <div className=" lg:h-[500px] xl:h-2/3 flex flex-col md:flex-row lg:gap-5">
          <div className="h-full w-full md:w-1/3 lg:rounded-[8px] overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={manicura2}
              alt="Manicura personalizada boda"
              width="824"
              height="771"
            />
          </div>
          <div className="h-full w-full md:w-1/3 lg:rounded-[8px] overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={manicura3}
              alt="Manicura personalizada roja"
              width="1268"
              height="1173"
            />
          </div>
          <div className="h-full w-full md:w-1/3 lg:rounded-[8px] overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={manicura4}
              alt="Manicura personalizada elegante"
              width="1290"
              height="1176"
            />
          </div>
        </div>
        <div className="px-5 2xl:px-0 h-1/3 w-full flex justify-center items-center">
          <h2 className=" text-center text-xl">
            Sumérgete en el mundo del lujo y la elegancia. Descubre una
            experiencia de manicura única, donde la belleza de tus uñas alcanza
            su máximo esplendor. En nuestro exclusivo salón, combinamos la
            artesanía con los productos de alta gama para brindarte uñas
            impecables y sofisticadas. Deja que tus manos hablen por ti y
            experimenta la perfección en cada detalle.
          </h2>
        </div>
      </div>
    </>
  );
}
