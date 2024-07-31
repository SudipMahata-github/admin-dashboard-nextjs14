import { User } from "./models"
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2
    try {
        connectToDB()
        const count = await User.countDocuments({ username: { $regex: regex } });
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE);
        return { count, users };
    } catch (error) {
        throw new Error(error)
    }
}


export const fetchAllUsers = async () => {
    try {
        connectToDB()
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error)
    }
}

export const fetchSingleUser = async (id) => {
    try {
        connectToDB()
        const user = User?.findById(id);
        return user;
    } catch (error) {
        throw new Error(error)
    }
}