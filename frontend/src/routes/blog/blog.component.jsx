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
        <Col xs={3} lg={{ order: 2 }}>
          {posts.data &&
            posts.data.map((post, i) => {
              if (!post.attributes.featured && i <= 1)
                return (
                  <Card key={i} className='headline-posts order-2'>
                    <Card.Img
                      variant='top'
                      src={`http://localhost:1337${post.attributes.Image.data.attributes.url}`}
                    />
                    <Card.Body>
                      <Card.Title>{post.attributes.Title}</Card.Title>
                      <Card.Text>{post.attributes.short_description}</Card.Text>
                    </Card.Body>
                  </Card>
                );
            })}
        </Col>
      </Row>
      <Row>
        <BlogPost />
      </Row>
    </div>
  );
};

export default Blog;
