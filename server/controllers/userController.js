
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import Resume from "../models/Resume.js";

const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token;
}

//controller for users registraction 
// POST: /api/users/register



export const registerUser = async (req,res) =>{
    try{
        const {name,email,password} = req.body;

        //cheak if require fields are present
        if(!name || !email || !password){
            return res.status(400).json({message: "Missing requere fields"})
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User alreadly exists"})
        }

        // create new users
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name, email, password: hashedPassword
        })

        // return succes message
        const token = generateToken(newUser._id)
        newUser.password = undefined;

        return res.status(201).json({message:'user created successfully', token, user: newUser})
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}


//controller for users login 
// POST: /api/users/login


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate jwt token
    const token = generateToken(user._id);

    // don't send password back
    user.password = undefined;

    return res.status(200).json({
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// controller for getting user bt id
//GET: /api/usrs/data


export const getUserById = async (req,res) =>{
    try{

        const userId = req.userId

        //cheak if user exists
        const user = await User.findOne(userId)
        if(!user){
            return res.status(404).json({message: 'User not Found'})
        }

        // return user
        user.password = undefined;
        return res.status(200).json({ user})
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

//controler for getting resume
//GET: /api/users/resume

export const getUserResume = async (req,res) => {
    try {
        const userId = req.userId;

        // return user resume
        const resumes = await Resume.find({userId})
        return res.status(200).json({resumes})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}