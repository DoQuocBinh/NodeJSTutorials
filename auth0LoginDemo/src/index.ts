import express from "express"
const app = express()
app.set('view engine','hbs')

import { auth } from'express-openid-connect';
import { itemsRouter } from "./items/items.router";

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'Qr20zqtKhXBrkrlf2cN9URTjvTEb7RdT',
    issuerBaseURL: 'https://dev-e42be0kavg8dfspb.us.auth0.com'
  };
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));

app.use(express.json());
app.use("/api/menu/items", itemsRouter);

app.get('/',(req,res)=>{
    const isLoggedIn : boolean = req.oidc.isAuthenticated()
    res.render('home',{loginStatus: isLoggedIn,user:req.oidc.user});
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log("Server is up at port:", PORT)})