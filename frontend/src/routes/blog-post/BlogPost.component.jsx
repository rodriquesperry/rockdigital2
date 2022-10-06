import React from 'react';

import PIC from '../../assets/81iF6QLWlKL._SS500_.jpg';
import me from '../../assets/IMG-1561 copy 2.png';

import './BlogPost.styles.css';

const BlogPost = () => {
  return (
    <div className='blog-post-container'>
      <div className='blog-post-header'>
        <div className='bog-post-header-background'></div>
        <div className='header-content-container'>
          <div className='col'>
            <img src={PIC} alt='' fluid />
          </div>
          <div className='col header-text'>
            <h2>
              This is where your headline goes! And Lets see where it goes from
              this point forward
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam sint illo quas laboriosam vel, et ea labore ullam neque
              enim non voluptatum exercitationem. Rerum quia non animi adipisci
              neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae aliquam sint illo quas laboriosam vel, et ea labore ullam
              neque enim non voluptatum exercitationem. Rerum quia non animi
              adipisci neque.
            </p>
            <p>READ TIME: 5mins</p>
          </div>
        </div>
        <div className='author-info'>
          <div className='col-3 info-pic'>
            <img src={me} alt='' />
          </div>
          <div className='info-text'>
            <h5>Rodriques Perry</h5>
            <h6>05 Oct 2022</h6>
            <small>Tags, categories, hashtags</small>
          </div>
        </div>
      </div>
      <div className='blog-post'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          molestias, perferendis esse commodi, excepturi consequatur pariatur ad
          error earum facilis itaque aliquid fuga impedit cupiditate corporis.
          Officiis quisquam iure autem. Consectetur in cumque architecto
          deserunt delectus quod pariatur ipsam libero ratione, perspiciatis,
          magni illo natus nostrum ad iste beatae eos voluptatum vitae expedita
          facere fugit recusandae? Minus laborum placeat rem! Error accusamus
          sint, cum quaerat, consequuntur assumenda incidunt natus corporis ut
          quidem iusto, similique laborum eum totam beatae veniam! Consequatur
          quam distinctio molestias dignissimos sit. Iusto a corrupti dolore
          asperiores! Laudantium dolore sequi ullam? Saepe, ea architecto.
          Consectetur reprehenderit accusantium cupiditate, aspernatur officia
          vel. At soluta commodi dignissimos quis atque nemo eum, dolore ratione
          vitae labore dolor fugit adipisci sint. Distinctio nihil maxime dolore
          ratione excepturi ipsam a minima corporis fugiat doloribus, possimus
          voluptates dolorum fugit. Illo harum ad soluta voluptatem sunt
          commodi, dicta nulla necessitatibus! Neque magni quas similique?
          Obcaecati amet, illum provident aut eum quo sit suscipit cumque
          consectetur officiis veritatis dolore a assumenda doloribus porro
          possimus et voluptate, in facere autem? Iure distinctio quisquam
          corrupti deserunt asperiores! Ullam blanditiis iure aliquam veniam
          nemo sed accusantium cupiditate suscipit necessitatibus nisi magni
          molestiae repudiandae dolorem consequuntur enim, inventore neque quas
          illo? Voluptates sunt quidem ipsam eum laudantium itaque impedit!
          Culpa, veniam eos ad ut possimus placeat dolore rem molestiae nesciunt
          incidunt excepturi animi, aspernatur velit officiis saepe in voluptas
          aliquam quaerat at? Laborum aspernatur vero non nam, qui eius.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
