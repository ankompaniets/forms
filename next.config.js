
const withCSS = require('@zeit/next-css')
//  Without CSS Modules, with PostCSS 
module.exports = withCSS()

// module.exports = {
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' }
//     }
//   }
// }

