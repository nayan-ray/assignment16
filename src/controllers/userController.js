const createUser = (req, res)=>{
    res.status(201).json({
        success:true,
        message : "User created successfully"
    })
}

const readUser =(req, res)=>{
    res.status(200).json({
        success:true,
        message : "User read successfully"
    })
} 



const updateUser =(req, res)=>{
    res.status(200).json({
        success:true,
        message : "User updated successfully"
    })
}

const deleteUser = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User deleted successfully"
    })
}

const getAllUsers = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "All users fetched successfully"
    })
}

const getUserById = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User fetched by ID successfully"
    })
}

const loginUser = (req, res)=>{ 
    res.status(200).json({
        success:true,
        message : "User logged in successfully"
    })
}

const logoutUser = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User logged out successfully"
    })
}

const changePassword = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "Password changed successfully"
    })
}
const updateProfile = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User profile updated successfully"
    })
}

const makeAdmin = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User made admin successfully"
    })
}
const removeAdmin = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "Admin role removed successfully"
    })
}

const searchUsers = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User search completed successfully"
    })
}

const filterUsers = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User filter completed successfully"
    })
}
const blockUser = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User blocked successfully"
    })
}
const unblockUser = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "User unblocked successfully"
    })
}

const verifyEmail = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "Email verified successfully"
    })
}
const resendVerification = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "Verification email resent successfully"
    })
}

const uploadProfilePicture = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "Profile picture uploaded successfully"
    })
}

const deleteAccount = (req, res)=>{
    res.status(200).json({
        success:true,
        message : "Account deleted successfully"
    })
}


export default {createUser,readUser, updateUser, deleteUser, getAllUsers, getUserById, loginUser, logoutUser, changePassword, updateProfile, makeAdmin, removeAdmin, searchUsers, filterUsers, blockUser, unblockUser, verifyEmail, resendVerification, deleteAccount, uploadProfilePicture
};