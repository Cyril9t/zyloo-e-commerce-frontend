import z from "zod"

export const productItemInfo = z.object({
    price: z.number().positive().min(1, "Item Price must Not be one value"),
    color: z.string().min(1, 'Define Item Color'),
    stock: z.number().min(2, "Must Upload Available in stuck"),
    size: z.string().min(0, "Size")
})

export type productItemType = z.infer<typeof productItemInfo>