import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './footer.styles.css';

const Footer = () => {
  const [error, setError] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get('http://localhost:1337/api/posts?populate=*')
        .then((data) => setRecentPosts(data.data.data))
        .catch((error) => setError(error));
    };
    getPosts();
  }, []);

  return (
    <div className='footer-container'>
      <div>
        <h3>ROCK DIGITAL</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          dolorum expedita
        </p>
      </div>
      <div>
        <h3>ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          dolorum expedita
        </p>
      </div>
      <div>
        <h3>RECENT POSTS</h3>
        {recentPosts.map((recentPost, i) => {
          if (i >= recentPosts.length - 4) {
            return <p key={i}><a href={`/blog/blogpost/${recentPost.id}`}>{recentPost.attributes.title}</a></p>;
          }
          return null;
        })}
      </div>
      <div>
        <h3>SOMETHING OR NOTHING</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          dolorum expedita
        </p>
      </div>
    </div>
  );
};

export default Footer;
