import {expressjwt, GetVerificationKey} from "express-jwt";
import jwksRsa from "jwks-rsa";


export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-e42be0kavg8dfspb.us.auth0.com/.well-known/jwks.json`
  }) as GetVerificationKey,

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://dev-e42be0kavg8dfspb.us.auth0.com/`,
  algorithms: ["RS256"]
});
