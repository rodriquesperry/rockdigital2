import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../src/App';

const PORT = 8000;

const app = express();

var cors = require('cors');

app.use(cors());

app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/services', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/portfolio', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/contact', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/blog', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/website-design-and-development', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/website-improvement', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use('/website-maintenance', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }

    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
