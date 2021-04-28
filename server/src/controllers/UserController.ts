import jwt from "jsonwebtoken";
import User from "../models/User";

export default class UserController {
  public static async login(req, res) {
    let user = await User.findOne({email: req.body.email})
    if(user){
        res.json({
          user: user,
          token: jwt.sign({data: user}, process.env.JWT_SECRET)
        })
    }else{
      let newUser = await new User(req.body);
      await newUser.save((err, user) => {
        res.json({
          user: newUser,
          token: jwt.sign({data: user}, process.env.JWT_SECRET)
        })
      });
    }
  }
}

