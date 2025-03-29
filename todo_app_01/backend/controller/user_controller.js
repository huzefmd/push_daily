import User from "../model/user_schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import z from "zod";
const jwt_secret = "i_love_u";

const user_schema = z.object({
  email: z.string().email({ msg: "in valid email " }),
  username: z
    .string()
    .min(5, { msg: "username should be more than 5 charecters" }),
  password: z
    .string()
    .min(6, { msg: "password should be more than 6 charecters" })
    .regex(/^(?=.*[A-Z]).{8,}$/, {msg:"ahould contain One upaer case letter and a min length og 8 chars"})
});

export const signin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ msg: "all fields should be required" });
    }
    const validation = user_schema.safeParse({ username, email, password });
    if (!validation.success) {
      const err_msg = validation.error.errors.map((err) => err.message);
      return res.status(400).json({ error: err_msg });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "User alredy regestered", user });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hash });
    await newUser.save();
    if (newUser) {
      res.status(200).json({ msg: "User Signed in Succesfully ", newUser });
    }
  } catch (error) {
    // console.log(error)
    res.json({ error: "Error in Signing in User" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ id: user._id }, jwt_secret);
      res.status(200).json({ msg: "User Sucesfully Loged in ", token });
    } else {
      res.json({ msg: "User Not Signed in " });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error in loging User" });
  }
};

export const remove_user = async (req, res) => {
  try {
    await User.deleteMany();
    res
      .status(200)
      .json({ msg: "Suucesfully all User in the Data base are removed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error in removing User", error });
  }
};

export const fetch_user = async (req, res) => {
  try {
    const allUser = await User.find();
    res
      .status(200)
      .json({
        msg: "User Data Fetched Suucesfully From the Data base",
        allUser,
      });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "Error in fetchging User Data from the data base" });
  }
};
