import z from "zod"

export const registerSchema = z.object({
    firstName: z.string().min(2, "Name too short"),
    lastName: z.string().min(2, "Name too short"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "password must be minimum of 6 characters")
})

export const loginSchema = z.object({
    email: z.email("Email required"),
    password: z.string().min(1, "password required")
})

export type registerData = z.infer<typeof registerSchema>;

export type loginData = z.infer<typeof loginSchema>;

