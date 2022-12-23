import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })

mongoose.connect("mongodb://127.0.0.1:27017/quizdata", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    // project_name: String,
    // // project_details:String,
    // Option_a:String,
    // Option_b:String,
    // Option_c:String,
    // Option_d:String,
    // correct_option:String
    // email: String,
    // password: String

    question:{
        type:String,
        required:true
    },
    correct_answer:{
        type:String,
        required:true
    },
    incorrect_answers:[
        {
           type:String,
           required:true 
        },
        {
            type:String,
           required:true 
        },
        {
            type:String,
           required:true 
        }
    ]
   

})



const User = new mongoose.model("User", userSchema)

//Routes
// app.post("/login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 
// app.get("/formdata",async(req,res)=>{
//       User.find({},(err,result)=>{
//         if(err){
//             res.send(err)
//         }
//         res.send(result)
//       })
//     })
// const middleware=(req,res,next)=>{
//     if(req.query.User>=10){
//      req.send('game is over')
//     }else{
//      next();
//     }
//  }
//  app.use(middleware)
 app.get('/formdata', (req,res)=> {
    User.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
    //  res.send(User)
 })
 

app.post("/formdata", (req, res)=> {
    // const { name, email, password} = req.body
    // User.findOne({email: email}, (err, user) => {
    //     if(user){
    //         res.send({message: "User already registerd"})
    //     } else 
      // {
        // post 

        // var  arr = [], answer;
        // for (answer in req.body){
        //     var correctChoice = questionModel.find({_id:answer._id}).correctChoice;
        //     if (correctChoice != answer.choice){
        //         arr.push({
        //             '_id':answer._id,
        //             'correctChoice': correctChoice
        //         })
        //     }
        // }
        // res.send(arr);

    

        const {question,correct_answer,incorrect_answers} = req.body
            const user = new User({
                // project_name,
                // project_details,
                // Option_a,
                // Option_b,
                // Option_c,
                // Option_d,
                // correct_option
                // email,
                // password
                
            
                        question,
                        correct_answer, 
                        incorrect_answers
                    
            
                
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully submited, Please login now." })
                }
            })
     //   }
    //})
    



}) 

app.listen(9003,() => {
    console.log("BE started at port 9003")
});
