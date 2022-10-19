import React from 'react';

import { Helmet } from 'react-helmet';

import Row from 'react-bootstrap/Row';

import FeaturedPost from '../../components/featured-blog-post/FeaturedPost.component';
import BlogPosts from '../../components/blog-posts/BlogPosts.component';

import './blog.styles.css';

const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta
          name='description'
          content='A blog about web design, search engine optimization, website maintenance and website improvement for business owners'
        />
        <meta name='keywords' content='web design seo' />
        <title>Blog</title>
      </Helmet>
      <div className='img-container'>
        <h1 id='text'>THE BLOG</h1>
      </div>
      <Row className='posts-container'>
        <FeaturedPost />
      </Row>
      <Row>
        <BlogPosts />
      </Row>
    </div>
  );
};

export default Blog;
