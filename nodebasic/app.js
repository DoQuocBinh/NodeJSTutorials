const express = require('express')
const dotenv = require('dotenv')
const app = express()


// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://tommy:12345654321@cluster0.lkrga.mongodb.net/TCH2201"

main().catch(err => console.log(err))
async function main() {
  await mongoose.connect(mongoDB);
}

dotenv.config()

app.set('view engine','hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
//tat ca cac request bat dau bang user se den userRouter
const userRouter = require('./controllers/userController')
app.use('/user',userRouter)

app.post('/register',async (req,res)=>{
    console.log(req.body)
    const school = req.body.txtSchool
    const country = req.body.txtCountry
    const user = {
        'school' : school,
        'country' : country
    }
    let userModel = require('./models/user')
    userModel = new userModel(user)
    await userModel.save()

    res.render('student',{'user':user})
})

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/student',(req,res)=>{
    const name = "Minh Phuong"
    res.render('student',{'name':name})
})

const PORT =  process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is up at ${PORT}`)
})