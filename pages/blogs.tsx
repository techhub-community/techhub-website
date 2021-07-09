import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pills from '@/components/Pills';
import { getPosts } from '@/lib/blogs';
import Head from 'next/head';

type Post = {
  title: string;
  slug: string;
  published_at: string;
  custom_excerpt: string;
  tags: any;
  primary_tag: any;
  reading_time: Float32Array;
  html: string;
  feature_image: string;
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    revalidate: 10,
    props: { posts },
  };
};

function moment(published_at: string) {
  return new Date(published_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const blogs: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Blogs - TechHub :: Community</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-12 gap-x-6 gap-y-12 px-4 md:px-12 xl:px-24 py-12">
        {posts.map((post, index) => {
          return (
            <article
              key={post.slug}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 semi-zoom hover:shadow shadow-md"
            >
              <img src={post.feature_image} className="w-full" alt="" />
              <div className="flex flex-col px-6 py-2">
                <a href={`blog/${post.slug}`}>
                  <h1 className="font-semibold text-lg mb-4">{post.title}</h1>
                </a>
                <summary className="line-clamp-3">
                  {post.custom_excerpt}
                </summary>
                <summary className="my-4 text-sm flex gap-2">
                  <p className="text-brand-500 font-semibold tracking-widest">
                    {post.reading_time} Minute(s) Read
                  </p>
                  <p>|</p>
                  <p className="text-blue-500 font-semibold capitalize tracking-widest">
                    {moment(post.published_at)}
                  </p>
                </summary>
                {post.primary_tag ? (
                  <div className="flex flex-wrap gap-2 -ml-1 mt-1 mb-3">
                    {post.tags
                      ? post.tags.map((item) => (
                          <Pills
                            key={item.slug}
                            text={'# ' + item.slug}
                            cname="bg-gray-200 text-xs text-black py-1"
                          />
                        ))
                      : ''}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </article>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default blogs;
