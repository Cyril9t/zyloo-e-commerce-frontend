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

const cartFunc = async (url: string, { arg }: { arg: { productItemId: string, quantity: Number } }) => {
    const res = await api.post(url, arg)

    return res.data
}

export const createCart = () => {
    return useSWRMutation("/cart/cart", cartFunc)
}


const createProductItem = async (url: string, { arg }: { arg: { productId: string, price: number, stock: number, color: string } }) => {
    const res = await api.post(url, arg);
    return res.data
}

export const productItem = () => {
    return useSWRMutation("/product/product-item", createProductItem)
}


export const cart = () => {
    return useSWRMutation("/cart/cartsItem", fetcherFun)

}

export const Order = () => {
    return useSWRMutation("/Order/Orders", fetcherFun)
}