import { Request, Response } from "express";
import User from '../models/userModel';

// interface User {
//     id: number;
//     name: string;
// }

// let users: User[] = [
//     { id: 1, name: 'Mounika' },
//     { id: 2, name: 'Avyay' }
// ];

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    
    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found'});
    }
};

export const createUser = async (req: Request, res: Response) => {
    const user = new User({ name: req.body.name });
    await user.save();
    res.status(201).json(user);
};

export const updateUser = async(req: Request, res: Response) => {
    const user = await User.findByIdAndUpdate(
        req.params.id, 
        { name: req.body.name },
        { new: true }
    );

    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found..'});
    }
};

export const deleteUser =async (req: Request, res: Response) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if(!user) {
        res.status(404).json({ message: 'User not found'});
    } else {
        res.status(200).json(
            { message: 'User deleted successfully', 
              data: {user}
            });
    }
};