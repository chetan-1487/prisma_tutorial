import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Invalid email format").max(255, "Email must be shorter than 255 characters"),
});

export const updateUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").optional(),
  email: z.email("Invalid email format").max(255, "Email must be shorter than 255 characters").optional(),
});
