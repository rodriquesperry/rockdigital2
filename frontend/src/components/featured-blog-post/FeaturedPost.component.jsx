import { useEffect, useState } from 'react';

import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FeaturedPost = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get('http://localhost:1337/api/posts?populate=*')
        .then((data) => setPosts(data.data.data.reverse()))
        .catch((error) => setError(error));
    };
    getPosts();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      {posts &&
        posts.map((post, i) => {
          if (post.attributes.featured) {
            return (
              <Col xs={(6, { order: 1 })} className='featured-container'>
                <Card key={i} className='featured'>
                  <Card.Img
                    variant='top'
                    src={`http://localhost:1337${post.attributes.Image.data.attributes.url}`}
                  />
                  <Card.Body>
                    <Card.Title>{post.attributes.Title}</Card.Title>
                    <Card.Text>{post.attributes.short_description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
        <Col xs={3} lg={{ order: 2 }}>
          {posts &&
            posts.map((post, i) => {
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
    </>
  );
};

export default FeaturedPost;
