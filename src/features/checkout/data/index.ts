import z from "zod"

export const Address = z.object({
    firstName: z.string().min(2, "First Name Required"),
    lastName: z.string().min(2, "Name too short"),
    email: z.email("Invalid email"),
    StreetAddress: z.string().min(1, "Please Provide Your street Address"),
    city: z.string().min(1, "Please Provide your City Name"),
    state: z.string().min(1, "Please provide your state Name"),
    postalCode: z.number().min(2, "POSTALCODE!!")
})

export type AddressType = z.infer<typeof Address>