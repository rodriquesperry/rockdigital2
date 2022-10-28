import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FeaturedPost = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get('https://rockdigital.agency:1337/api/posts?populate=*')
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
              <Col
                md={(6, { order: 1 })}
                className='featured-container'
                key={i}
              >
                <a href={`/blog/blogpost/${post.id}`}>
                  <Card key={i} className='featured'>
                    <Card.Img
                      variant='top'
                      src={`https://rockdigital.agency:1337${post.attributes.featured_image.data.attributes.url}`}
                    />
                    <Card.Body>
                      <Card.Title>
                        {post.attributes.title.length > 60
                          ? `${post.attributes.title.slice(0, 60)}...`
                          : post.attributes.title}
                      </Card.Title>
                      <Card.Text>
                        {post.attributes.short_description.length > 150
                          ? `${post.attributes.short_description.substring(
                              0,
                              150
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
      <Col md={(6, { order: 2 })} lg={3}>
        {posts &&
          posts.map((post, i) => {
            if (!post.attributes.featured && i <= 1)
              return (
                <a href={`/blog/blogpost/${post.id}`} key={i}>
                  <Card key={i} className='headline-posts order-2'>
                    <Card.Img
                      variant='top'
                      src={`https://rockdigital.agency:1337${post.attributes.featured_image.data.attributes.url}`}
                    />
                    <Card.Body>
                      <Card.Title>
                        {post.attributes.title.length > 38
                          ? `${post.attributes.title.slice(0, 38)}...`
                          : post.attributes.title}
                      </Card.Title>
                      <Card.Text>
                        {post.attributes.short_description.length > 40
                          ? `${post.attributes.short_description.substring(
                              0,
                              40
                            )}...`
                          : post.attributes.short_description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              );
            return null;
          })}
      </Col>
    </>
  );
};

export default FeaturedPost;
