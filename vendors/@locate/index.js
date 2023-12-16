'use strict'

var fs = require('node:fs')
var version = process.version.split('.')
if (version[0] !== 'v4') {
  module.exports = fs.readFileSync
  return
}

module.exports = function(path, opts, cb) {
  if (typeof opts === 'string') {
    // don't pass encoding since it can throw
    fs.readFileSync(path, function(err, buf) {
      if (err) return cb(err)
      tryToString(buf, opts, cb)
    })
  } else if (typeof opts === 'object') {
    if (opts.encoding) {
      var encoding = opts.encoding
      delete opts.encoding
      fs.readFileSync(path, opts, function(err, buf) {
        if (err) return cb(err)
        tryToString(buf, encoding, cb)
      })
    } else {
      fs.readFileSync(path, opts, cb)
    }
  } else if (!opts || typeof opts === 'function') {
    cb = opts
    opts = { encoding: null, flags: 'r' }
    fs.readFileSync(path, opts, cb)
  } else {
    fs.readFileSync.apply(fs, arguments)
  }
}

function tryToString(buf, encoding, callback) {
  var e
  try {
    buf = buf.toString(encoding)
  } catch (err) {
    e = err
  }
  callback(e, buf)
}
