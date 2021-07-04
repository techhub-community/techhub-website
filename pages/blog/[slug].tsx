import { useRouter } from 'next/router';
import BlogLayout from '@/components/BlogLayout';
import { useState } from 'react';
import CustomLoader from '@/components/CustomLoader';
import BarLoader from 'react-spinners/BarLoader';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,custom_excerpt`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

type Post = {
  title: string;
  html: string;
  slug: string;
  custom_excerpt: string;
  feature_image: string;
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;
  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true);

  const router = useRouter();

  if (router.isFallback) {
    return <CustomLoader />;
  }

  let metaObject = {
    n_title: `${post.title} :: TechHub Community Blog`,
    n_description: `${post.custom_excerpt}`,
    n_og_url: `https://tech-hub.org/blog/${post.slug}`,
    n_og_title: `${post.title} :: TechHub Community Blog`,
    n_og_description: `${post.custom_excerpt}`,
    n_og_image: `${post.feature_image}`,
    n_twitter_url: `https://tech-hub.org/blog/${post.slug}`,
    n_twitter_title: `${post.title} :: TechHub Community Blog`,
    n_twitter_description: `${post.custom_excerpt}`,
    n_twitter_image: `${post.feature_image}`,
  };

  return (
    <>
      <BlogLayout _metaData={metaObject} title={post.title}>
        <div className="mb-16 lg:mb-24 items-center px-3 lg:px-6 prose lg:prose-lg xl:prose-xl mx-auto dark:prose-dark ">
          <div className="text-center ">
            <p
              className="text-3xl font-semibold my-2"
              style={{ marginBottom: '0px' }}
            >
              {post.title}
            </p>
            <p className="" style={{ marginTop: '5px' }}>
              {post.custom_excerpt}
            </p>
          </div>
          <img
            className="cover lazyload"
            src={post.feature_image}
            data-zoom
            alt=""
          />
          <span
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="dark:text-white"
          ></span>
        </div>
      </BlogLayout>
    </>
  );
};

export default Post;
