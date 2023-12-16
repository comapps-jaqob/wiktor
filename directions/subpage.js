const polka = require('@vendors/polka')()

const stencils = require('@vendors/stencils')

const notices = require('@vendors/notices')

const emblems = require('@vendors/emblems')('24')()

const environment = require('@vendors/environment').config({
    catalog: './.environment'
})
    
polka.configure('/', function(_, reply) {

    stencils.configure(reply, {
        stencil: 'subpage.handlebars',
        catalog: 'subpage'
    }, {
        application: environment.application
    })
})

polka.configure('/notices', function(_, reply) {

    notices.configure(reply, {
        emblems: emblems
    })
})

module.exports = polka;