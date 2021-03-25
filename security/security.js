const auth = require('./auth').admin
const authorize = (req, res, next) => {

    if (!req.headers.authorization) {
        console.log("Inide io");
        res.redirect('/unauthorize');
    }


    const base64Str = req.headers.authorization.split(' ')[1];

    const [user, pass] = Buffer.from(base64Str, 'base64').toString().split(':');

    if (user === auth.user && pass === auth.pass) {

        next();
    } else {
        res.redirect('/unauthorize');
    }




}
module.exports = {
    authorize
}