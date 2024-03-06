const jwt = require("jsonwebtoken");

const jwtVerify = (req, res, next) => {
	const token = req.cookies.token;
	const sercretKey = process.env.SECRET_KEY;
	try {
		const user = jwt.verify(token, sercretKey);
		req.user = user;
		next();
	} catch (err) {
		res.clearCookie("token");
		return res.status(401).json({ message: "Unauthorized" });
	}
};

module.exports = { jwtVerify };
