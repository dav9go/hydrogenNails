//Routing
import {NavLink} from '@remix-run/react';

export function meta() {
  return [
    {title: 'Su Nails | Contacta YA'},
    {
      name: 'description',
      content:
        'No te quedes con las ganas y contacta con nosotros para tener una manicura de lujo en Zaragoza.',
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
      href: 'https://sunails.es/contacto',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Su Nails | Contacta YA',
    },
    {
      property: 'og:description',
      content:
        'No te quedes con las ganas y contacta con nosotros para tener una manicura de lujo en Zaragoza.',
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
      content: 'https://sunails.es/contacto',
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
      content: 'Su Nails | Contacta YA',
    },
    {
      property: 'twitter:description',
      content:
        'No te quedes con las ganas y contacta con nosotros para tener una manicura de lujo en Zaragoza.',
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

export default function Contacto() {
  return (
    <>
      <section className="mt-36 lg:mt-44 p-2 lg:px-20 flex flex-col gap-5">
        <h1 className="text-4xl">Contacta YA. No te quedes, con las ganas!</h1>
        <h2 className="text-2xl">Métodos de Contacto</h2>
        <p>
          Estamos disponibles a través de varios métodos de contacto. No dudes
          en elegir el que mejor te funcione.
        </p>
        <ul>
          <li>
            Envíanos un correo electrónico a:{' '}
            <NavLink to="mailto:david9go@gmail.com">david9go@gmail.com</NavLink>
          </li>
          <li>
            Llámanos al:{' '}
            <NavLink to="tel:+34608638374">+34 608 63 83 74</NavLink>
          </li>
          <li>
            Conéctate en Redes Sociales:{' '}
            <NavLink aria-label="Link a instagram" to="#">
              Instagram
            </NavLink>{' '}
            |{' '}
            <NavLink aria-label="Link a facebook" to="#">
              Facebook
            </NavLink>{' '}
            |{' '}
            <NavLink aria-label="Link a twitter" to="#">
              Twitter
            </NavLink>
          </li>
        </ul>
        <h2>Horario de Atención</h2>
        <p>
          Nuestro horario de trabajo es de lunes a viernes, de 9:00 a.m. a 6:00
          p.m. (hora local). Ten en cuenta que no estamos disponibles las 24
          horas, pero te responderemos lo antes posible dentro de nuestro
          horario laboral.
        </p>

        <h2>Tiempo de Respuesta</h2>
        <p>
          Nos esforzamos por responder a todas las consultas en un plazo de 24
          horas. Puedes esperar una respuesta rápida de nuestro dedicado equipo
          de soporte al cliente.
        </p>

        <h2>Mensaje de Agradecimiento</h2>
        <p>
          Gracias por elegirnos para tu cuidado de uñas. Tu satisfacción es
          nuestra prioridad y estamos aquí para hacer que tu experiencia en el
          cuidado de uñas sea excepcional. Esperamos poder ayudarte y esperamos
          tu mensaje.
        </p>

        <h2>Preguntas Frecuentes</h2>
        <p>
          Si tienes preguntas comunes, te recomendamos consultar nuestra{' '}
          <NavLink aria-label="Más información" to="/informacion">
            página de Preguntas Frecuentes
          </NavLink>{' '}
          para encontrar respuestas a las consultas más habituales.
        </p>
      </section>
    </>
  );
}
