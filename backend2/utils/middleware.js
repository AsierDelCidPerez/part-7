const logger = require("./logger")

const errorHandler = (error, request, response, next) => {
    response.json({error: error.message})
    logger.error(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).json({error: 'Not found'})
}

const getTokenFrom = (request, res, next) => {
    const auth = request.get('authorization')
    if(auth && auth.toLowerCase().startsWith('bearer')){
        request.token = auth.substring(7)
    }
    next()
}

const exported = {errorHandler, unknownEndpoint, getTokenFrom} 
module.exports = exported