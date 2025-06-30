import {sequelize} from "../config/database.js";
import bcrypt from "bcryptjs";

export const loginController = async(req,res) => {
   
   try {
     const {email, password} = req.body();
     
     const user = await user.findOne({email});
     if(!user){
        res.status(400).json({message:"All field are required"});
     }

     //Compare password
     const isPasswordValid = await bcrypt.compare(password, user.password);
     if(!isPasswordValid){
        res.status(401).json({message: "Invalid email or password"});
     }
     res.status(200).json({
        message: "Login Successfull",
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            country: user.country,
            phoneNumber: user.phoneNumber
        },
     })
    

   } catch (error) {
      console.error("Login Failed", error);
      res.status(500).json({message:"Server error"});
   }

};