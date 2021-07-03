import React from 'react';
import Seo from '@/components/Seo';
import PageScrollBar from '@/components/PageScrollBar';
import Navbar from '@/components/Navbar';

const BlogLayout = ({ _metaData, ...props }) => (
  <>
    <Seo _metaData={_metaData} />
    <PageScrollBar
      color="#0aa863"
      gradientColor="#2bf29c"
      gradient={true}
      height={5}
    />
    <Navbar/>
    {props.children}
  </>
);

export default BlogLayout;
