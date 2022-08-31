import { apiHandler } from "../../../server/helpers/api-handler";
import cookieParser from "cookie-parser";
import querystring from "querystring";

import { serialize } from "cookie";

const CLIENT_ID = "947aecbe26774ef2bdfbde344604d7c3";
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URL = "http://localhost:3000/";

const stateKey = "spotify_auth_state";

var generateRandomString = function (length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const state = generateRandomString();
    res.setHeader("set-cookie", serialize(stateKey, state));
    const scope = "user-read-private user-read-email";
    res.redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: CLIENT_ID,
          scope: scope,
          redirect_uri: REDIRECT_URL,
          state: state,
        })
    );
  }
}
