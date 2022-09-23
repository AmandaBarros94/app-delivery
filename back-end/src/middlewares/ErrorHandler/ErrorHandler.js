class ErrorHandler {
    constructor(dafaultStatus = 500) {
        this.dafaultStatus = dafaultStatus;
        this.handle = this.handle.bind(this);
    }

    handle(error, _req, res, _next) {
        const errStatus = error.status || this.dafaultStatus;
        const errMessage = error.message || 'Internal Server Error';

        return res.status(errStatus).json({ message: errMessage });
}
}

module.exports = ErrorHandler;