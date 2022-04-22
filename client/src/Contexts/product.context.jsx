import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const ProductContext = createContext(null);

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        axios.get(`${BASE_URL}/api/product/all`).then(res => {
            const allProducts = res.data;

            setProducts([...allProducts]);
        })
    }

    const addNewProduct = async (product) => {

        axios.post(`${BASE_URL}/api/product`, {
            ...product
        }).then(res => {
            const newProduct = res.data;
            console.log({ newProduct });
            setProducts(prev => [...prev, newProduct]);
        })
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <ProductContext.Provider value={{ products, addNewProduct }} {...props} />
    )
}

export const useProduct = () => useContext(ProductContext);