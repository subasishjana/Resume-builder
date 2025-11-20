// import jwt from 'jsonwebtoken'

// const protect = async (req, res , next) =>{
//     const token = req.headers.authrization;
//     if(!token){
//         return res.status(401).json({message: "Unathorized"})
//     }
//     try{
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)
//         req.userId = decoded.userId;
//         next()
//     }catch(error){
//         return res.status(401).json({message: 'Unauthorized'})
//     }
// }

// export default protect;

import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default protect;
