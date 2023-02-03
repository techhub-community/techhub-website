import { useRouter } from 'next/router';
import BlogLayout from '@/components/Blogs/BlogLayout';
import { getSinglePost, getPosts } from '@/lib/blogs';
import CustomLoader from '@/components/Global/CustomLoader';
import React from 'react';
import Link from 'next/link';
import Pills from '@/components/Blogs/Pills';

type Post = {
  title: string;
  html: string;
  slug: string;
  tags: any;
  custom_excerpt: string;
  authors: any;
  id: string;
  primary_tag: any;
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
    n_og_url: `https://techhub.org.in/blog/${post.slug}`,
    n_og_title: `${post.title} :: TechHub Community Blog`,
    n_og_description: `${post.custom_excerpt}`,
    n_og_image: `${post.feature_image}`,
    n_twitter_url: `https://techhub.org.in/blog/${post.slug}`,
    n_twitter_title: `${post.title} :: TechHub Community Blog`,
    n_twitter_description: `${post.custom_excerpt}`,
    n_twitter_image: `${post.feature_image}`,
  };

  return (
    <>
      <BlogLayout _metaData={metaObject} title={post.title}>
        <div className="flex flex-col my-16">
          <div className="mx-6 lg:mx-[28%] text-md lg:text-xl">
            {post.primary_tag ? (
              <div className="flex flex-wrap gap-2 -ml-1 mt-1 mb-3 ">
                {post.tags
                  ? post.tags.map((item) => (
                      <Pills
                        key={item.slug}
                        text={item.slug}
                        cname="bg-gray-200 text-xs text-black py-1"
                      />
                    ))
                  : ''}
              </div>
            ) : (
              ''
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold my-2 mx-6 lg:mx-[28%]">
            {post.title}
          </h1>
          <p className="mx-6 lg:mx-[28%] my-1 lg:my-3 text-md lg:text-xl">
            {post.custom_excerpt}
          </p>
          {post.authors.map((item) => (
            <>
              <div className="flex mt-3 gap-3 mx-6 lg:mx-[28%] mb-12 text-md lg:text-lg">
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
          <img
            className="cover lazyload mx-6 lg:mx-[22%] rounded"
            src={post.feature_image}
            data-zoom
            alt=""
          />
        </div>
        <div className="mb-16 lg:mb-24 items-center px-5 lg:px-6 prose lg:prose-lg xl:prose-xl mx-auto dark:prose-dark ">
          <span
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="dark:text-white break-words"
          ></span>
        </div>
      </BlogLayout>
    </>
  );
};
export default Post;
