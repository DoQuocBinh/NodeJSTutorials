"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set('view engine', 'hbs');
const express_openid_connect_1 = require("express-openid-connect");
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'Qr20zqtKhXBrkrlf2cN9URTjvTEb7RdT',
    issuerBaseURL: 'https://dev-e42be0kavg8dfspb.us.auth0.com'
};
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use((0, express_openid_connect_1.auth)(config));
app.get('/', (req, res) => {
    const isLoggedIn = req.oidc.isAuthenticated();
    res.render('home', { loginStatus: isLoggedIn, user: req.oidc.user });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log("Server is up at port:", PORT); });
