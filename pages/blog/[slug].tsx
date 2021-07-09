import { useRouter } from 'next/router';
import BlogLayout from '@/components/BlogLayout';
import { getSinglePost, getPosts } from '@/lib/blogs';
import CustomLoader from '@/components/CustomLoader';
import React from 'react';
import Link from 'next/link';

type Post = {
  title: string;
  html: string;
  slug: string;
  tags: any;
  custom_excerpt: string;
  authors: any;
  id: string;
  dateFormatted: any;
  feature_image: any;
};

// Static Filesystem Cache
export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;

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
          <hr />
        </div>
        <div className="flex flex-col mx-96 gap-3 mb-12 -mt-12">
          <h6 className="font-semibold mb-0 flex-start">Author :</h6>
          {post.authors.map((item) => (
            <>
              <div className="flex mt-3 gap-3">
                <img
                  src={item.profile_image}
                  className="h-16 rounded-full"
                  alt=""
                />
                <div className="gap-0">
                  <h5 className="font-medium" key={item.name}>
                    {item.name} ({item.slug})
                  </h5>
                  <p key={item.bio}>{item.bio}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </BlogLayout>
    </>
  );
};
export default Post;
