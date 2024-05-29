const asyncHandler = require("express-async-handler")
const User = require("../models/usersModel");

//@desc Get all users
//@route GET /api/users
//@access public
const getUsers = asyncHandler(async (req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
});

//@desc get specific user
//@route GET /api/users/:id
//@access public
const getUser =asyncHandler( async (req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found")
    }
    res.status(200).json(user)
});



//@desc Create new User
//@route POST /api/users
//@access public
const createUser = asyncHandler(async (req, res)=>{
    const { name, email, phone} = req.body;
    if(!name ||!email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!!!");
    }
    const user = await User.create({
        name,
        email,
        phone,
    })
    res.status(201).json(user);
});


//@desc Update User
//@route PUT /api/users/:id
//@access public
const updateUser = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found!!!");
    }
    const findAndUpdate = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(findAndUpdate)
});

//@desc delete User
//@route DELETE /api/users/:id
//@access public
const deleteUser = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found");
    }
    await User.deleteOne({_id: req.params.id});
    res.status(200).json({message: `delete User for ${req.params.id}`})
});


module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser
    };