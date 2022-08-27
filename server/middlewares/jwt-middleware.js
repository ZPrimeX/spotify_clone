import { expressjwt } from "express-jwt";
import util from "util";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
function jwtMiddleware(req, res) {
  const middleware = expressjwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/user/sign-up",
      "/api/playlist",
      "/api/user/login",
      "/api/user/validate",
      `/api/playlist/${req.query.id}`,
      "/api/user/forgot-password",
      "/api/user/verify-email",
    ],
  });
  return util.promisify(middleware)(req, res);
}

export { jwtMiddleware };
