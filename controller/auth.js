const Person = require('../models/Person')

const signupController = async(req,res) =>{
    try {
        console.log('signupcontroller called');
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const work = req.body.worktype
        if(!username||!email||!password||!work){
            return res.status(400).json("Fill all the fields");
        }
        const existedPerson = await Person.findOne({email});
        if(existedPerson){
            return res.status(400).json("User already existed With This Email");
        }
        const person = new Person();
        person.userName = username;
        person.email = email;
        person.password = password;
        person.work= work
        await person.save();
        res.status(200).json("Signup Successfull");
    } catch (err) {
        res.status(400).json(`There is an Error: ${err}`);
    }
}

const loginController = async(req,res) =>{
    try {
        console.log('signupcontroller called');
    const email = req.body.email;
    const password = req.body.password;
    if(!email||!password){
        return res.status(400).json("Fill all the fields");
    }
    const person = await Person.findOne({email});
    if(!person){
        return res.status(400).json("No user with this email");
    }
    if(person.password !== password){
        return res.status(400).json("Your Password does'nt Matched")
    }
    return res.status(200).json(person);
    } catch (err) {
        res.status(400).json(`There is an Error: ${err}`);
    }  
}
const getUsers = async(req,res) =>{
    try {
        console.log("Come");
        const Users = await Person.find();
        console.log("Come");
        res.status(200).json(Users);
    } catch(err){
        res.status(400).json(`There is an Error: ${err}`);
    }
   
}
const getworker = async(req,res) =>{
    try {
        const Work = req.params.work;
    if(Work=="Seller"||Work=="Buyer"){
        const user = await Person.find({work:Work});
        return res.status(200).json(user);
    }else{
        return res.status(200).json("Define Worktype")
    };
    
    } catch (err) {
        res.status(400).json(`There is an Error: ${err}`);
    }
}

const updateuser = async(req,res) =>{
    try {
        const userId = req.params._id;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const work = req.body.worktype;
        const user = await Person.findOne({_id:userId});
        if(!user){
            return res.status(404).json("Not Found");
        };
        user.userName = username;
        user.email = email;
        user.password = password;
        user.work= work
        await user.save();
        res.status(200).json("Updated Successfull");
    } catch (err) {
        res.status(400).json(`There is an Error: ${err}`);   
    }
}
const deleteuser = async(req,res) =>{
    try {
        const userId = req.params._id;
        const user = await Person.findByIdAndDelete({_id:userId});
        if(!user){
            return res.status(404).json("Not Found");
        };
        res.status(200).json("Deleted Successfull");
    } catch (err) {
        res.status(400).json(`There is an Error: ${err}`);
    }
}
module.exports ={signupController,loginController,getUsers,getworker,updateuser,deleteuser};