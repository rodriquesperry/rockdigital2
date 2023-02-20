import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { IconContext } from 'react-icons';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

import './footer.styles.css';

const Footer = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get('https://rockdigital.agency/dashboard/api/posts?populate=*')
        .then((data) => setRecentPosts(data.data.data));
    };
    getPosts();
  }, []);

  return (
    <div className='footer-container d-none d-lg-grid '>
      <div className='section col-3'>
        <h2 id='footer-business-name'>ROCK DIGITAL</h2>
        <h4 className='social-header'>Let's Get Social!</h4>
        <IconContext.Provider value={{ size: 40 }}>
          <div className='social-icons'>
            <div className='social-icon'>
              <FaFacebook />
            </div>
            <div className='social-icon'>
              <AiFillTwitterCircle />
            </div>
            <div className='social-icon'>
              <FaYoutube />
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <div className='section about col-3'>
        <h4>ABOUT US</h4>
        <p>
          We are a service disabled veteran owned and operated digital service
          agency based right outside of San Antonio, TX.
        </p>
      </div>
      <div className='section col-3'>
        <h4>RECENT POSTS</h4>
        {recentPosts.map((recentPost, i) => {
          if (i >= recentPosts.length - 4) {
            return (
              <p className='posts' key={i}>
                <a href={`/blog/blogpost/${recentPost.id}`}>
                  {recentPost.attributes.title.toUpperCase()}
                </a>
              </p>
            );
          }
          return null;
        })}
      </div>
      <div className='section col-3'>
        <iframe
          title='GMB Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886191.229510714!2d-98.75030577542975!3d29.815658214858566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c938a1f353e31%3A0xdebac766899af97e!2sRock%20Digital!5e0!3m2!1sen!2sus!4v1676897377651!5m2!1sen!2sus'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        // width='100'
      </div>
    </div>
  );
};

export default Footer;
