import React, { useEffect, useState } from 'react'
import axios from "axios"
import api from "./Constants"
const Products = ({ loginToken }) => {

    const [items, setItems] = useState([])
    const getItems = async () => {
        console.log(loginToken);
        try {
            const response = await axios.get(`${api}/products/companies/hari's company/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`, {
                headers: {
                    Authorization: loginToken
                }
            })
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