const jwt = require('jsonwebtoken')

exports.getAccessToRoute = (req, res, next) => {
    if (req.cookies.usertoken) {
        const { usertoken } = req.cookies;
        if (usertoken) {
            const result = jwt.verify(usertoken, process.env.JWT_TOKEN)
            if (result) {
                if (next) next()
            } else {
                res.clearCookie('usertoken', { httpOnly: true, secure: true, sameSite: 'Strict' });
                return res.status(401).send({ message: "Unauthorized" })
            }
        }
    } else {
        return res.status(401).send({ message: "Unauthorized" })
    }
}
