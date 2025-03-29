import User from "../models/user_schema.js";

export const signin = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({ msg: "User Alredy Signed in " });
    }
    const newUser = new User({ email, password, firstName, lastName });
    await newUser.save();
    if (newUser) {
      res.status(200).json({ msg: "User Signed in Suucesfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "unable User to signin" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user){
        res.status(200).json({msg:"User Logged in Succesfully"})
    }
    else{
        res.json({msg:"User Didnt Signed In"})
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "unable User To login" });
  }
};
