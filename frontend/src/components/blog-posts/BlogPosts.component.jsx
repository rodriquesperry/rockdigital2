import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

import './blogPosts.styles.css';

const BlogPost = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get('https://rockdigital.agency/dashboard/api/posts?populate=*')
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
              <Col md={6} lg={3} className='post-col' key={i}>
                <a href={`/blog/blogpost/${post.id}`}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src={`https://rockdigital.agency/dashboard${post.attributes.featured_image.data.attributes.url}`}
                    />
                    <Card.Body>
                      <Card.Title>
                        {post.attributes.title.length > 48
                          ? `${post.attributes.title.slice(0, 48)}...`
                          : post.attributes.title}
                      </Card.Title>
                      <Card.Text>
                        {post.attributes.short_description.length > 60
                          ? `${post.attributes.short_description.substring(
                              0,
                              60
                            )}...`
                          : post.attributes.short_description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            );
          }
          return null;
        })}
    </div>
  );
};

export default BlogPost;
