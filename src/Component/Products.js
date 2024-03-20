import React, { useEffect, useState } from 'react'
import axios from "axios"
import api from "./Constants"
const Products = () => {
    axios.defaults.withCredentials = true;

    const [items, setItems] = useState([])
    const getItems = async () => {
        try {
            const response = await axios.get(`${api}/products/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`)
            console.log(response.data);

        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getItems()
    }, [])

    return (
        <div>products</div>
    )
}
export default Products