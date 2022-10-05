import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FeaturedPost from '../../components/featured-blog-post/FeaturedPost.component';
import BlogPost from '../../components/blog-post/BlogPost.component';

import axios from 'axios';

import './blog.styles.css';

const Blog = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get('http://localhost:1337/api/posts?populate=*')
        .then((data) => setPosts(data.data))
        .catch((error) => setError(error));
    };
    getPosts();
  }, []);

  
  return (
    <div>
      <div className='img-container'>
        <h1 id='text'>THE BLOG</h1>
      </div>
      <Row className='posts-container'>
        <FeaturedPost />
        
      </Row>
      <Row>
        <BlogPost />
      </Row>
    </div>
  );
};

export default Blog;
