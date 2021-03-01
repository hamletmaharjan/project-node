const jwt = require('jsonwebtoken');

/**
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Function} next
 */
export function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  // res.json(req.headers);
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, 'shh', function (err, decoded) {
    let info = {
        id: decoded.id,
        role: decoded.role
    }
    req.user = info;
    // req.body.role = decoded.role;
    // req.body.id = decoded.id;
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    next();
  });
}
/**
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Function} next
 */
export function verifyAdmin(req, res, next) {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized' });
  }
}

/**
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Function} next
 */
export function verifyUser(req, res, next) {
  if (req.user.id == req.params.id) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized' });
  }
}

// export default verifyToken;
