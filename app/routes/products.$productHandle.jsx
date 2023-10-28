//Data
import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
//Components
import BigCard from '~/components/Products/BigCard';

export async function loader({params, context: {storefront}}) {
  const {product} = await storefront.query(PRODUCTS_QUERY, {
    variables: {handle: params.productHandle},
  });

  return json({product});
}

const seo = ({data}) => ({
  title: data?.product?.seo?.title,
  description: data?.product?.seo?.title,
  image: data?.product?.featuredImage?.url,
});

export const handle = {
  seo,
};

export default function singleProduct() {
  const {product} = useLoaderData();
  console.log(product);
  return (
    <>
      <section className="mt-36 lg:mt-44 p-2 lg:px-20 flex flex-col gap-10">
        <BigCard
          img={product.featuredImage.url}
          altText={product.featuredImage.altText}
          imgW={product.featuredImage.width}
          imgH={product.featuredImage.height}
          title={product.title}
          text={product.description}
          tags={product.tags}
          price={product.price.minVariantPrice.amount}
        />
      </section>
    </>
  );
}

const PRODUCTS_QUERY = `#graphql
query singleProduct($handle: String!) {
    product(handle: $handle) {
      id
      price: priceRange {
        minVariantPrice {
          amount
        }
      }
      title
      handle
      description
      tags
      seo {
        title
        description
      }
      featuredImage {
        altText
        height
        width
        url
      }
    }
  }
`;
