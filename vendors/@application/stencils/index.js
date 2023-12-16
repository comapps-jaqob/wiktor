const { compile } = require('../../@tempura')

const locate = require('../../@locate')

const encoding = 'UTF8'

function configure(reply, preferences, helpers) {

    const draft = locate('./stencils' + '/' + preferences.catalog + '/' + preferences.stencil, {
        encoding: encoding
    })

    const render = compile(draft)

    const stencil = render(helpers)
    
    reply.end(stencil)

}

module.exports = { configure };