const authRepository = require("./repository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const create = async (req) => {
  return await authRepository.create(req.body);
};

const login = async ({ email, password }) => {
  const user = await authRepository.findByEmail(email);
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return {
    email: user.email,
    token,
  };
};

const changePassword = async (req) => {
  const { oldPassword, newPassword } = req.body;
  const user = await authRepository.findByEmail(req.user.email);
  if (!user) return null;

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) return null;

  user.password = newPassword;
  await user.save();

  return { _id: user._id, email: user.email };
};

module.exports = {
  create,
  login,
  changePassword,
};
