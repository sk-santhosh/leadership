import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
   try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken)
    if (decodedToken) {
      req.token = decodedToken.data
      next();
    }else{
      throw "Invalid Request"
    }
  } catch {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }
}

export {auth}