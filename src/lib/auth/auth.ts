import api from "../api";
import useSWRMutation from "swr/mutation";
import { registerSchema, loginSchema } from "../schema/validate";
import z from "zod";

const userReg = async (url: string, { arg }: { arg: z.infer<typeof registerSchema> }) => {
    const res = await api.post(url, arg)
    return res.data
}

export const authReg = () => {
    return useSWRMutation('/auth/register', userReg);
}


const login = async (url: string, { arg }: { arg: z.infer<typeof loginSchema> }) => {
    const res = await api.post(url, arg)
    return res.data
}

export const authLogin = () => {
    return useSWRMutation('/auth/login', login);
}