//Components
import {FourProducts} from '~/components/Fourproducts';
import {VerticalPic} from '~/components/VerticalPic';
import {Hero} from '~/components/Hero';
//Data
import {useLoaderData} from '@remix-run/react';
//Images
import blackNail from '../images/blackNail.jpeg';
import fancyNail from '../images/fancyNail.jpeg';
import snakeNail from '../images/snakeNail.jpeg';

export function meta() {
  return [
    {title: 'Su Nails'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(PRODUCTS_QUERY);
}

export default function Index() {
  const {products} = useLoaderData();

  return (
    <>
      <section class="p-5 lg:p-10 pt-20 flex flex-col xl:flex-row gap-10 xl:gap-0 select-none">
        <Hero />
      </section>
      <section class="p-10 pt-20 flex justify-evenly select-none">
        <VerticalPic alt="Uñas de diseño" img={fancyNail} text="Único" />
        <VerticalPic alt="Uñas de diseño" img={blackNail} text="Elegante" />
        <VerticalPic
          alt="Uñas de diseño"
          img={snakeNail}
          text="Personalizado"
        />
      </section>
      {/*<section class="p-2 lg:py-20 lg:px-20 bg-[#00000011]">
        <h2 class="text-[2vw] text-center mb-5">
          Manicura personalizada con diseños únicos
        </h2>
        <p class="text-center text-[1vw] max-w-[800px] mx-auto">
          Sumérgete en el mundo del lujo y la elegancia. Descubre una
          experiencia de manicura única, donde la belleza de tus uñas alcanza su
          máximo esplendor. En nuestro exclusivo salón, combinamos la artesanía
          con los productos de alta gama para brindarte uñas impecables y
          sofisticadas. Deja que tus manos hablen por ti y experimenta la
          perfección en cada detalle.{' '}
        </p>
  </section>*/}
      {/*<section class="p-2 lg:py-20 lg:px-20">
        <FourProducts products={products} />
      </section>*/}
    </>
  );
}

const PRODUCTS_QUERY = `#graphql
query FourProducts {
  products(first: 4) {
    nodes {
      id
      price: priceRange {
        minVariantPrice {
          amount
        }
      }
      title
      description
      featuredImage {
        altText
        height
        width
        url
      }
      
    }
  }
}
`;
