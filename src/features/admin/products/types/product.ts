import { Tag } from "lucide-react";
import z from "zod";

export const productInfoSchema = z.object({
    tag: z.string(),
    name: z.string().min(1, "Product Name too short."),
    category: z.string().min(1, "what category is this item"),
    summary: z.string().min(3, "give brief summary for this item"),
    description: z.string().min(2, "give a short comprehensive StorFront rich manifest description for this item."),
})

export type productInfoData = z.infer<typeof productInfoSchema>

export interface AdminProduct {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    image: string;
}