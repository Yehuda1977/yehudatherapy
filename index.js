const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/aboutme', (req, res) => res.render('pages/aboutme'))
  .get('/psychotherapy', (req, res) => res.render('pages/psychotherapy'))
  .get('/fee', (req, res) => res.render('pages/fee'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
