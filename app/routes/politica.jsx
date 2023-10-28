export function meta() {
  return [
    {title: 'Su Nails | Manicura de lujo en Zaragoza'},
    {
      name: 'description',
      content: 'Política de privacidad.',
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
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ];
}

export default function Politica() {
  return (
    <>
      <section className="mt-36 lg:mt-44 p-2 lg:px-20 flex flex-col gap-5 max-w-[1400px] mx-auto">
        <h1 className="text-4xl">Política de privacidad</h1>
        <p>Fecha de última actualización: 28 Octubre de 2023</p>
        <h2 className="text-2xl">1. Información General</h2>
        <p>
          SuNails (en adelante "nosotros" o "nuestra") se compromete a proteger
          y respetar su privacidad. Esta Política de Privacidad describe cómo
          recopilamos, utilizamos y compartimos información personal de los
          usuarios de nuestro sitio web sunails.es (en adelante el "Sitio").
        </p>
        <h2 className="text-2xl">2. Información que Recopilamos</h2>
        <p>Recopilamos la siguiente información personal:</p>
        <ul>
          <li>- Nombre</li>
          <li>- Dirección de correo electrónico</li>
          <li>- Dirección de envío</li>
          <li>- Información de pago</li>
          <li>- Historial de navegación y compra</li>
          <li>- Cookies y tecnologías de seguimiento</li>
        </ul>
        <h2 className="text-2xl">3. Uso de la Información</h2>
        <p>
          Utilizamos la información personal recopilada para los siguientes
          propósitos:
        </p>
        <ul>
          <li>- Procesar y entregar pedidos realizados en nuestro Sitio.</li>
          <li>- Personalizar la experiencia del usuario en nuestro Sitio.</li>
          <li>
            - Enviar comunicaciones de marketing y promociones (solo con su
            consentimiento).
          </li>
          <li>- Mejorar y mantener nuestro Sitio.</li>
        </ul>
        <h2 className="text-2xl">4. Seguridad de la Información</h2>
        <p>
          Nos comprometemos a proteger la información personal y hemos
          implementado medidas de seguridad adecuadas para protegerla contra
          accesos no autorizados o divulgación.
        </p>
        <h2 className="text-2xl">5. Compartir Información</h2>
        <p>
          Podemos compartir información personal con terceros en las siguientes
          situaciones:
        </p>
        <ul>
          <li>
            - Con proveedores de servicios que nos ayudan en la operación del
            Sitio y la entrega de productos.
          </li>
          <li>- Para cumplir con obligaciones legales.</li>
          <li>- Con su consentimiento expreso.</li>
        </ul>
        <h2 className="text-2xl">6. Cookies y Tecnologías de Rastreo</h2>
        <p>
          Utilizamos cookies y otras tecnologías de seguimiento para mejorar su
          experiencia en nuestro Sitio. Puede configurar su navegador para
          rechazar todas o algunas cookies.
        </p>
        <h2 className="text-2xl">7. Sus Derechos</h2>
        <p>
          Usted tiene derechos sobre su información personal, incluyendo el
          derecho de acceder, rectificar y eliminar sus datos personales. Puede
          ejercer estos derechos enviándonos una solicitud a .
        </p>
        <h2 className="text-2xl">8. Cambios en esta Política</h2>
        <p>
          Nos reservamos el derecho de modificar esta Política de Privacidad en
          cualquier momento. La versión actualizada será publicada en el Sitio
          con la fecha de última actualización.
        </p>
        <h2 className="text-2xl">9. Contáctenos</h2>
        <p>
          Si tiene alguna pregunta o inquietud sobre esta Política de
          Privacidad, comuníquese con nosotros a través del correo:
          david9go@gmail.com.
        </p>
        <p>
          Esta Política de Privacidad fue actualizada por última vez el 28
          Octubre de 2023.
        </p>
      </section>
    </>
  );
}
