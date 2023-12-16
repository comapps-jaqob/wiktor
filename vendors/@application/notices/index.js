function configure(reply, preferences) {

    reply.end(JSON.stringify(preferences))

}

module.exports = { configure };