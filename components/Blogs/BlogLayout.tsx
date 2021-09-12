import React from 'react';
import Seo from '@/components/Global/Seo';
import PageScrollBar from '@/components/Blogs/PageScrollBar';
import Navbar from '@/components/Global/Navbar';

const BlogLayout = ({ _metaData, ...props }) => (
  <>
    <Seo _metaData={_metaData} />
    <PageScrollBar
      color="#C53E65"
      gradientColor="#F15084"
      gradient={true}
      height={5}
    />
    <Navbar />
    {props.children}
  </>
);

export default BlogLayout;
