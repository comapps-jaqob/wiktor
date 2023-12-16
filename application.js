const dongles = require('./dongles').config({
    '@vendors': './vendors',
    '@directions': './directions'
})

const polka = require('@vendors/polka')()

const sirv = require('@vendors/sirv')('root', {
    production: 'enabled'
})

const milliparsec = require('@vendors/milliparsec')()

const environment = require('@vendors/environment').config({
    catalog: './.environment'
})

const subpage = require('@directions/subpage')

polka.borrow(sirv, milliparsec)

polka.borrow('/subpage', subpage)

polka.catch(environment.catch)