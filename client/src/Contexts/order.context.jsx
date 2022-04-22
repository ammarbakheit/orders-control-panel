import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const OrderContext = createContext(null);

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([]);

    const getAllOrders = () => {
        axios.get(`${BASE_URL}/api/order/all`).then(res => {
            const allorders = res.data;

            setOrders([...allorders]);
        })
    }

    useEffect(() => {
        // console.log("ss");
        getAllOrders()
    }, [])
    return (
        <OrderContext.Provider value={{ orders }} {...props} />
    )
}

export const useOrder = () => useContext(OrderContext);