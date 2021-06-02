
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/alec/Projects/Cano Architecture/Gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/alec/Projects/Cano Architecture/Gatsby/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/alec/Projects/Cano Architecture/Gatsby/src/pages/contact.js")),
  "component---src-pages-gallery-js": preferDefault(require("/home/alec/Projects/Cano Architecture/Gatsby/src/pages/gallery.js")),
  "component---src-pages-index-js": preferDefault(require("/home/alec/Projects/Cano Architecture/Gatsby/src/pages/index.js"))
}

