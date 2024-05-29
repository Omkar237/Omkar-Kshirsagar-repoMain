const { constants} = require("../constants");

const errorHandler = (err, req, res, next)=> {

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation failed", message: err.message, stackTrace: err.stack});
            break;

        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
            break;

        case constants.UNAUTHORIZED:
            res.json({title: "UnAuthorized Passing", message: err.message, stackTrace: err.stack});
            break;

        case constants.FORBIDDEN:
            res.json({title: "Request Forbidden error", message: err.message, stackTrace: err.stack});
            break;

        case constants.SERVER_ERORR:
            res.json({title: "Server Not Found error", message: err.message, stackTrace: err.stack});
            break;

        default:
            console.log("No error all good!!!")
            break;
    }
}

module.exports = errorHandler;