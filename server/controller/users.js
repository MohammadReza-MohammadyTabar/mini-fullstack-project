const users = require("../model/users");

const getUsers = async (req, res) => {
  try {
    const data = await users.find();
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { name, age, email } = req.body;
  try {
    await new users({
      name,
      age,
      email,
    })
      .save()
      .then((data) => {
        res.status(201).json(data);
      });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

module.exports = { getUsers, createUser };
