const jwt = require("jsonwebtoken");

const verifyJWT = (request, response, next) => {
  var token = request.headers["x-access-token"];
  if (!token)
    return response.status(403).json({
      meta: null,
      data: [],
      status: 403,
      message: "Missing authenticated token.",
    });

  jwt.verify(token, process.env.SESSION_SECRET, function (error, decoded) {
    if (error)
      return response.status(401).json({
        status: "error",
        message: "Unauthorized.",
        meta: null,
        data: [],
      });

    request.userId = decoded.id;
    next();
  });
};

module.exports = verifyJWT;