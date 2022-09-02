import { apiHandler } from "../../../../server/helpers/api-handler";
import cookieParser from "cookie-parser";
import querystring from "querystring";

import { serialize } from "cookie";
import axios from "axios";

const CLIENT_ID = "";
const CLIENT_SECRET = "";
const REDIRECT_URL = "";
import request from "request";
import { getCookies } from "cookies-next";

const stateKey = "spotify_auth_state";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const cookie = req.query.spotify_auth_state || null;

    const storedState = cookie ? cookie : null;
    if (state === null || state !== storedState) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "state_mismatch",
          })
      );
    } else {
      res.setHeader("set-cookie", serialize(stateKey, ""));
      const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        method: "POST",
        form: {
          code: code,
          redirect_uri: REDIRECT_URL,
          grant_type: "authorization_code",
        },
        headers: {
          Authorization: "Basic " + new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
        json: true,
      };

      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var access_token = body.access_token,
            refresh_token = body.refresh_token;

          var options = {
            url: "https://api.spotify.com/v1/me",
            headers: { Authorization: "Bearer " + access_token },
            json: true,
          };

          // use the access token to access the Spotify Web API
          request.get(options, function (error, response, body) {
            console.log(body);
          });

          // we can also pass the token to the browser to make requests from there
          res.redirect(
            "/#" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
              })
          );
        } else {
          res.redirect(
            "/#" +
              querystring.stringify({
                error: "invalid_token",
              })
          );
        }
      });
    }
  }
}
