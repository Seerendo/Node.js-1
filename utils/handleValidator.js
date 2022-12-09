const { validationResult } = require('express-validator');

const validateResults = (req, res, next) => {
    /* const error = validationResult(req).formatWith(({ msg }) => msg);    
    const hasError = !error.isEmpty();
    if (hasError) {
        console.log('error');
        res.status(422).json({ error: error.array() });
    } else {
        console.log('next');
        next();
    } */
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        res.status(422);
        res.send(({ error: error.array() }));
    }
}

module.exports = validateResults;