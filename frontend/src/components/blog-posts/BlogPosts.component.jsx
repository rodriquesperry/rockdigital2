import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

import './BlogPosts.styles.css';

const BlogPost = () => {
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
    <div className='posts'>
      {posts &&
        posts.map((post, i) => {
          if (!post.attributes.featured && i >= 2) {
            return (
              <Col xs={3} className='post-col'>
                <Card>
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
    </div>
  );
};

export default BlogPost;
