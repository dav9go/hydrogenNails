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
      <div className="w-full xl:w-[40%] flex text-5xl md:text-9xl xl:text-[5.5vw] font-semibold  py-10 lg:py-36">
        <h1 className="xl:leading-[7.5vw]">
          <span>NUESTROS</span> <br></br>
          <span>DISEÑOS</span> <br></br>
          <span ref={titleRef}>ÚNICOS</span>
        </h1>
      </div>
      <div className="w-full xl:w-[60%] flex flex-col items-center justify-center gap-10 xl:gap-0">
        <div className=" h-[500px] xl:h-2/3 flex gap-5">
          <div className="h-full w-1/3 rounded-[8px] overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover" src={manicura2} />
          </div>
          <div className="h-full w-1/3 rounded-[8px] overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover" src={manicura3} />
          </div>
          <div className="h-full w-1/3 rounded-[8px] overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover" src={manicura4} />
          </div>
        </div>
        <div className="h-1/3 w-full flex justify-center items-center">
          <h2 className="2xl:max-w-[70%] text-center text-xl">
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
