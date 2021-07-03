import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Pills from '@/components/Pills';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

type Tags = {
  slug: string;
};

type Post = {
  title: string;
  slug: string;
  published_at: string;
  custom_excerpt: string;
  tags: Tags[];
  primary_tag: string;
  reading_time: number;
  html: string;
  feature_image: string;
};

async function getPosts() {
  // curl the blog posts from the content api
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,custom_excerpt,published_at,primary_tag,reading_time,html&include=tags`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    revalidate: 10,
    props: { posts },
  };
};

const blogs: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-12 gap-x-6 gap-y-12 px-4 md:px-12 xl:px-24 py-12">
        {posts.map((post, index) => {
          return (

            <article
              key={post.slug}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 semi-zoom hover:shadow shadow-md"
            >
              <img src={post.feature_image} className="w-full" alt="" />
              <div className="flex flex-col px-6 py-2">
                <a href={`blog/${post.slug}`}><h1 className="font-semibold text-lg mb-4">{post.title}</h1></a>
                <summary className="line-clamp-3">{post.custom_excerpt}</summary>
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
      <Footer/>
    </>
  );
};

export default blogs;


function moment(published_at: string) {
  return new Date(published_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
