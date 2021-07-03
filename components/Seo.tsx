import Head from 'next/head';
import React from 'react';

export default function Seo({ _metaData }) {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <title>{_metaData.n_title}</title>
        <meta
          name="title"
          content={_metaData.n_title}
          key={_metaData.n_title}
        />
        <meta
          name="description"
          key="description"
          content={_metaData.n_description}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" key="ogtype" content="website" />
        <meta
          property="og:url"
          key={_metaData.n_og_url}
          content={_metaData.n_og_url}
        />
        <meta
          property="og:title"
          key={_metaData.n_og_title}
          content={_metaData.n_og_title}
        />
        <meta
          property="og:description"
          key={_metaData.n_og_description}
          content={_metaData.n_og_description}
        />
        <meta
          property="og:image"
          key={_metaData.n_og_image}
          content={_metaData.n_og_image}
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:card"
          key="twittercard"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          key={_metaData.n_twitter_url}
          content={_metaData.n_twitter_url}
        />
        <meta
          property="twitter:title"
          key={_metaData.n_twitter_title}
          content={_metaData.n_twitter_title}
        />
        <meta
          property="twitter:description"
          key={_metaData.n_twitter_description}
          content={_metaData.n_twitter_description}
        />
        <meta
          property="twitter:image"
          key={_metaData.n_twitter_image}
          content={_metaData.n_twitter_image}
        />
      </Head>
    </>
  );
}
