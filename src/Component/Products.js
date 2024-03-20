import React, { useEffect, useState } from 'react'
import axios from "axios"
import api from "./Constants"

const Products = ({ loginToken, token_type }) => {
    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await axios.get(
                `${api}/products/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
                {
                    headers: {
                        Authorization: `${token_type} ${loginToken}`
                    }
                }
            )
            console.log(response.data);
            setItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Discount</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.productName}</td>
                            <td>${item.price}</td>
                            <td>{item.rating}</td>
                            <td>{item.discount}%</td>
                            <td>{item.availability}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products
