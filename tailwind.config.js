const areas = require('./plugins/grid-areas')
const layouts = require('./plugins/grid-layouts')
const shortcuts = require('./plugins/shortcuts')

module.exports = {
  npx: ['npx tailwindcss -o ./root/provisions/provision.0505a6fca8cb1051eabf0900.css --watch'],
  content: ['./stencils/**/**.handlebars'],
  theme: {
    fontFamily: {
      'sans': ["'Esteban'"]
    },
    spacing: {
      '[zero]': '0rem',
      '[natural]': '1.3125rem'
    },
    colors: {
      '[natural]': '#FCFBF8'
    },
    gridTemplateAreas: {
      'natural': ['mountain', 'main', 'cavity'],
      'mountain': ['abbreviations'],
      'protagonist': ['protagonist', 'pictures'],
      'gist': ['gist'],
      'present': ['present representation'],
      'inquiry': ['inquiry questions'],
      'cavity': ['logotype logotype logotype logotype helpers helpers', 'copyright copyright copyright copyright copyright copyright']
    }
  },
  plugins: [areas, layouts, shortcuts]
}