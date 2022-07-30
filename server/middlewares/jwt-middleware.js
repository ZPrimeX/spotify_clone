import { expressjwt } from "express-jwt";
import util from 'util'
import getConfig from "next/config";
import path from "path";

const { serverRuntineConfig } = getConfig();

function jwtMiddleware(req, res) {
    const middleware = expressjwt({ secret: serverRuntineConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            '/api/user/sign-up'
        ]
    })
    return util.promisify(middleware)(req, res)
}

export { jwtMiddleware }