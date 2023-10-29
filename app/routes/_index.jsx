//Components
import {FourProducts} from '~/components/Fourproducts';
import {VerticalPic} from '~/components/VerticalPic';
import {Hero} from '~/components/Hero';
import {Marquee} from '~/components/MainPage/Marquee';
import {Button} from '~/components/Button';
//Data
import {useLoaderData} from '@remix-run/react';
//Images
import blackNail from '../images/blackNail.webp';
import fancyNail from '../images/fancyNail.webp';
import snakeNail from '../images/snakeNail.webp';

export function meta() {
  return [
    {title: 'Su Nails | Manicura personalizada en Zaragoza'},
    {
      name: 'description',
      content:
        'Sumérgete en el mundo del lujo y la elegancia. Descubre una experiencia de manicura única en Zaragoza, donde la belleza de tus uñas alcanza su máximo explendor.',
    },
    {
      property: 'theme-color',
      media: '(prefers-color-scheme: light)',
      content: '#e7c6ff',
    },
    {
      property: 'theme-color',
      media: '(prefers-color-scheme: dark)',
      content: 'black',
    },
    {
      property: 'author',
      content: 'SuNails',
    },
    {
      tagName: 'link',
      rel: 'canonical',
      href: 'https://sunails.es',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Su Nails | Manicura personalizada',
    },
    {
      property: 'og:description',
      content:
        'Sumérgete en el mundo del lujo y la elegancia. Descubre una experiencia de manicura única en Zaragoza, donde la belleza de tus uñas alcanza su máximo explendor.',
    },
    {
      property: 'og:image',
      content:
        'https://cdn.shopify.com/oxygen/70108676363/1000006078/wgxrfzf3b/build/_assets/manicura2-O77WCP34.jpeg',
    },
    {
      property: 'og:image:width',
      content: '824',
    },
    {
      property: 'og:image:height',
      content: '771',
    },
    {
      property: 'og:url',
      content: 'https://sunails.es',
    },
    {
      property: 'og:site_name',
      content: 'SuNails',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:title',
      content: 'Su Nails | Manicura personalizada',
    },
    {
      property: 'twitter:description',
      content:
        'Sumérgete en el mundo del lujo y la elegancia. Descubre una experiencia de manicura única en Zaragoza, donde la belleza de tus uñas alcanza su máximo explendor.',
    },
    {
      property: 'twitter:image',
      content:
        'https://cdn.shopify.com/oxygen/70108676363/1000006078/wgxrfzf3b/build/_assets/manicura2-O77WCP34.jpeg',
    },
    {
      property: 'twitter:site',
      content: '@sunailsES',
    },
    {
      property: 'twitter:creator',
      content: '@sunailsES',
    },
    {
      property: 'twitter:label1',
      content: 'Creado por',
    },
    {
      property: 'twitter:data1',
      content: 'SuNails',
    },
    {
      property: 'robots',
      content: 'max-image-preview:large',
    },
  ];
}

export async function loader({context}) {
  return await context.storefront.query(PRODUCTS_QUERY);
}

export default function Index() {
  const {products} = useLoaderData();

  return (
    <>
      <section className="pt-44 xl:pt-32 flex flex-col xl:flex-row gap-10 xl:gap-0 select-none relative overflow-hidden">
        <Marquee />
        <Hero />
      </section>
      <section className="p-2 py-10 mb-20 lg:py-20 lg:px-20 mt-20 xl:mt-0 bg-[#00000011] flex flex-col gap-5">
        <h1 className="text-4xl text-center mb-5">
          Contacta YA con nosotros en ZARAGOZA HOLA BUENAS
        </h1>
        <p className="text-center text-lg max-w-[800px] mx-auto">
          ¿Listo para lucir una manicura única? ¡Ponte en contacto con nosotros
          y reserva tu cita ahora para dar vida a tus ideas!
        </p>
        <Button text="Contacta ya" />
      </section>
      {/*<section class="py-10 pt-20 flex flex-col md:flex-row select-none -z-20">
        <VerticalPic
          alt="Uñas de diseño lujoso"
          img={fancyNail}
          text="Único"
          width="1148"
          height="1600"
        />
        <VerticalPic
          alt="Uñas de diseño premium"
          img={blackNail}
          text="Elegante"
          width="928"
          height="1311"
        />
        <VerticalPic
          alt="Uñas de diseño único"
          img={snakeNail}
          text="Personalizado"
          width="1125"
          height="1564"
        />
      </section>*/}

      <section className="flex flex-col gap-10 p-2 xl:py-10 lg:px-20">
        <div className="flex items-center mb-5">
          <div className="flex-1 h-[3px] bg-[#00000011] mx-5 lg:mx-10"></div>
          <h2 className="text-2xl text-center">
            Modelos temporada <span className="text-amber-500">Halloween</span>
          </h2>
          <div className="flex-1 h-[3px] bg-[#00000011] mx-5 lg:mx-10"></div>
        </div>
        <FourProducts products={products} />
      </section>
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
