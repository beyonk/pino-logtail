'use strict'

const { Logtail } = require('@logtail/node')
const { token, endpoint } = require('./config.js')
const logger = new Logtail(token, endpoint ? { endpoint } : undefined)

module.exports = logger
