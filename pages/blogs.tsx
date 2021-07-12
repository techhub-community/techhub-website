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
  authors: any;
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
      <div className="mx-6 md:mx-12 xl:mx-48 my-16">
        {posts.map((post, index) => {
          return (
            <article
              key={post.slug}
              className="flex flex-col lg:flex-row gap-x-8 mb-12 semi-zoom"
            >
              <div className="flex-1 mb-6 lg:mb-0">
                <img
                  src={post.feature_image}
                  alt={post.title}
                  className="rounded-xl lg:h-72 float-right"
                />
              </div>
              <div className="flex-1 mx-2 lg:mx-0 self-center">
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
                <a href={`blog/${post.slug}`}>
                  <h2 className="font-semibold text-3xl tracking-wider hover:text-brand-500">
                    {post.title}
                  </h2>
                </a>
                <p className="my-1 text-lg">{post.custom_excerpt}</p>
                <summary className="my-2 text-sm flex gap-2">
                  <p className="text-brand-500 font-semibold tracking-widest">
                    {post.reading_time} Minute(s) Read
                  </p>
                  <p>|</p>
                  <p className="text-blue-500 font-semibold capitalize tracking-widest">
                    {moment(post.published_at)}
                  </p>
                </summary>
                <div>
                  {post.authors.map((item) => (
                    <>
                      <div className="flex mt-3 gap-3">
                        <img
                          src={item.profile_image}
                          className="h-12 rounded-full"
                          alt=""
                        />
                        <div className="gap-0">
                          <h5 className="font-medium" key={item.name}>
                            {item.name}
                          </h5>
                          <p key={item.bio}>{item.bio}</p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
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
