import z from "zod";

export const productInfoSchema = z.object({
    tagName: z.string(),
    name: z.string().min(1, "Product Name too short."),
    category: z.string().min(1, "what category is this item"),
    description: z.string().min(2, "give a short comprehensive StorFront rich manifest description for this item."),
})

export type productInfoData = z.infer<typeof productInfoSchema>

export interface AdminProduct {
    id: string;
    name: string;
    category: string;
    image: string;
    price?: number;
    stock?: number;
}