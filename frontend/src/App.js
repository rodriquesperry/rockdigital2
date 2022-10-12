import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import DesignAndDevelopment from './routes/website-design-and-development/DesignAndDevelopment.component';
import WebsiteMaintenance from './routes/website-maintenance/WebsiteMaintenance.component';
import WebsiteImprovement from './routes/website-improvement/WebsiteImprovement.component';
import About from './routes/about/about.component';
import Services from './routes/services-route/Services.component';
import Blog from './routes/blog/blog.component';
import BlogPost from './routes/blog-post/BlogPost.component';
import Contact from './routes/contact/contact.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path='/website-design-and-development'
            element={<DesignAndDevelopment />}
          />
          <Route path='/website-maintenance' element={<WebsiteMaintenance />} />
          <Route path='/website-improvement' element={<WebsiteImprovement />} />
          <Route path='/about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/blogpost/:id' element={<BlogPost />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
