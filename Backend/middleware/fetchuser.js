var jwt = require("jsonwebtoken");
const JWT_SECRET = "mER@mEOWg#AR@AYA";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("please enter valid token");
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    console.log(data);
    next();
  } catch (error) {
    res.status(401).send({ error: "please enter valid token" });
  }
};

module.exports = fetchuser;
