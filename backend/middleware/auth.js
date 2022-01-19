import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const isCustomAuth = token.length < 500; // if lenght is less than 500 then the token is our otherwise external providers

      let decodedData;
      if (token && isCustomAuth) {      
        decodedData = jwt.verify(token, secret); // local auth
  
        req.userId = decodedData?.id;
      } else {
        decodedData = jwt.decode(token); //external auth provider
  
        req.userId = decodedData?.sub;
      }    
      next(); // all previous statements are good
  } catch (error) {
    console.log(error);
  }
};

export default auth;