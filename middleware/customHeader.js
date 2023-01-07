const customHeader = (req, res, next) =>{
    try {
        const apiKey = req.headers.api_key;
        if(apiKey === 'leifer-01'){
            res.status(200);
            next();
        } else {
            res.status(403);
            res.send({error: 'API_KEY_INCORRECTA'});
        }        
    } catch (error) {
        res.status(403);
        res.send({error: 'ERROR_EN_EL_ENVIO_DE_PARAMETROS'});
    }
}

module.exports = customHeader;






