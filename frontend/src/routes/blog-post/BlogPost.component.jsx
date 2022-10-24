import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import axios from 'axios';

import { Helmet } from 'react-helmet';

import './blogPost.styles.css';

const BlogPost = () => {
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});
  const [authorImage, setAuthorImage] = useState({});
  const [featImage, setFeatImage] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const getPost = () => {
      axios
        .get(`http://localhost:1337/api/posts/${id}?populate=*`)
        .then((data) => {
          setPost(data.data.data.attributes);
          setAuthorImage(
            data.data.data.attributes.author_image.data.attributes.url
          );
          setFeatImage(
            data.data.data.attributes.featured_image.data.attributes.url
          );
        })
        .catch((error) => setError(error));
    };
    getPost();
  }, [id]);

  const {
    publishedAt,
    author,
    title,
    body,
    read_time,
    short_description,
  } = post;

  let date = new Date(publishedAt);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <meta />
        <title>{title}</title>
      </Helmet>
      <div className='blog-post-container'>
        {post && (
          <div className='blog-post-container'>
            <div className='blog-post-header'>
              <div className='blog-post-header-background'></div>
              <div className='header-content-container'>
                <div className='col'>
                  <img src={`http://localhost:1337${featImage}`} alt='' fluid />
                </div>
                <div className='col header-text'>
                  <h2>{title}</h2>
                  <p className='short-description'>{short_description}</p>
                  <p className='read-time'>READ TIME: {read_time}mins</p>
                </div>
              </div>
              <div className='author-info'>
                <div className='col-3 info-pic'>
                  <img src={`http://localhost:1337${authorImage}`} alt='' />
                </div>
                <div className='info-text'>
                  <h5>{author}</h5>
                  <h6>{date.toDateString()}</h6>
                  <small>Tags, categories, hashtags</small>
                </div>
              </div>
            </div>
            <div className='blog-post'>
              <p>{body}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
