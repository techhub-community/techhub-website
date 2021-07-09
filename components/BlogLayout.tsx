import React from 'react';
import Seo from '@/components/Seo';
import PageScrollBar from '@/components/PageScrollBar';
import Navbar from '@/components/Navbar';

const BlogLayout = ({ _metaData, ...props }) => (
  <>
    <Seo _metaData={_metaData} />
    <PageScrollBar
      color="#C53E65"
      gradientColor="#F15084"
      gradient={true}
      height={5}
    />
    <Navbar/>
    {props.children}
  </>
);

export default BlogLayout;
