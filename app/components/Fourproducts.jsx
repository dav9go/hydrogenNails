//Images
import {Image} from '@shopify/hydrogen';
import net1 from '../images/net1.png';

export function FourProducts({products}) {
  return (
    <div class="grid grid-cols-2 xl:grid-cols-4 justify-items-center">
      {products?.nodes.map((product) => (
        <article
          key={product?.id}
          class="flex flex-col gap-3 h-[350px] w-[90%] md:h-[550px] lg:h-[600px] xl:h-[450px] lg:w-[340px] xl:w-[240px] "
        >
          <div class="w-full h-[85%] overflow-hidden relative">
            <Image
              className="w-full h-full object-cover"
              src={product?.featuredImage?.url}
              alt={product?.featuredImage?.altText}
            />
            <img className="absolute -top-24 -left-16" src={net1} />
          </div>
          <div class="flex flex-col justify-between h-[15%] p-1">
            <h3 class="text-center">{product?.title}</h3>
            {/*<p class="text-center">{product.price.minVariantPrice.amount}€</p>*/}
          </div>
        </article>
      ))}
    </div>
  );
}
