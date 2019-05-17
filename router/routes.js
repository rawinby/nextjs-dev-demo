const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('index','/')
routes.add('form','/form')

// Name   Page      Pattern
// ----   ----      -----
// routes.add('about', '/about-us:foo(bar|baz)')                                       // about  about     /about
// routes.add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
// routes.add('user', '/user/:id', 'profile', '/users/current')                // user   profile   /user/:id
// routes.add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// routes.add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3
// routes.add('auth', '/auth/login','/auth/register','/auth/logout')   