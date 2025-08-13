import { Request, Response } from 'express';
import { userService } from '../services/user.service.js';
import { createUserSchema, updateUserSchema } from '../utils/user.validataion.js';

export const userController = {
  getUsers: async (_req: Request, res: Response) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await userService.getUserById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const validatedData = createUserSchema.parse(req.body);
      const newUser = await userService.createUser(validatedData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData= updateUserSchema.parse(req.body);
      const updatedUser = await userService.updateUser(id, validatedData);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await userService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },
};
