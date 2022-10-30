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
          content='A blog about digital trends and best practices for business owners.'
        />
        <title>Blog</title>
      </Helmet>
      <div className='blog-container'>
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
    </div>
  );
};

export default Blog;
