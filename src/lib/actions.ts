import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import api from "./api";

interface AdminProduct {
    name: string;
    category: string;
    price: string;
    stock: string;
    image: File;
    tag: string
}

const uploadProductsInfo = async (url: string, { arg }: {
    arg: {
        name: string;
        category: string;
        price: string;
        stock: string;
        image: File;
        tag: string
    }
}) => {
    const res = await api.post(url, arg);

    res.data
}

export const upload = async () => {
    return useSWRMutation("/product/upload", uploadProductsInfo)
}


export const fetcherFun = async (url: string) => {
    const res = await api.get(url);

    return res.data
}

export const allProducts = () => {
    return useSWRMutation("/product/products", fetcherFun)
}

export const totalUsers = () => {
    return useSWRMutation("/users/users", fetcherFun)
}