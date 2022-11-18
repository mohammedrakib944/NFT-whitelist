const User = require("./user.model");

// GET USERR
const GetUser = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE USER
const CreateUser = async (req, res) => {
  try {
    const oldUser = await User.findOne({ email: req.body.email });
    if (oldUser) {
      res.status(200).json({ status: "taken", data: oldUser });
    } else {
      const newUser = req.body;
      const result = await User.create(newUser);
      res.status(200).json({ status: "success", data: result });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//DELETE USER
const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ message: "Could not delete!" });
  }
};

module.exports = {
  GetUser,
  CreateUser,
  DeleteUser,
};
