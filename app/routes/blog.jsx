//Data
import {useLoaderData} from '@remix-run/react';
//Components
import FirstBlog from '~/components/Blog/FirstBlog';
import SecondaryBlog from '~/components/Blog/SecondaryBlog';

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
  return await context.storefront.query(BLOGS_QUERY);
}

export default function Blog() {
  const {blogs} = useLoaderData();
  const [firstBlog, ...restOfBlogs] = blogs?.nodes[0]?.articles.nodes;
  console.log(firstBlog, 'firstBlog');
  console.log(restOfBlogs, 'restOfBlogss');
  return (
    <>
      <section className="mt-36 lg:mt-44 p-2 lg:px-20 flex flex-col gap-10">
        <h1 className="text-4xl">Blog. Nice, very Nice!</h1>

        <FirstBlog firstBlog={firstBlog} />

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
          {restOfBlogs.map((blog) => {
            return <SecondaryBlog key={blog.id} blog={blog} />;
          })}
        </section>
      </section>
    </>
  );
}

const BLOGS_QUERY = `#graphql
query Blogs {
  blogs(first: 1) {
    nodes {
      id
      title
      handle
      seo {
        title
        description
      }
      articles(first: 5) {
        nodes {
          id
          title
          seo {
            title
            description
          }
          authorV2 {
            name
          }
          tags
          excerpt
          publishedAt
          image {
            altText
            height
            width
            id
            url
          }
          contentHtml
        }
      }
    }
  }
}
`;
