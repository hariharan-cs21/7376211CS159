import React, { useEffect, useState } from 'react';
import axios from "axios";
import api from "./Constants";

const Products = ({ loginToken, token_type }) => {
    const [items, setItems] = useState([]);
    const [company, setCompany] = useState("AMZ");
    const [category, setCategory] = useState("Laptop");

    const getItems = async () => {
        try {
            const response = await axios.get(
                `${api}/products/companies/${company}/categories/${category}/products?top=10&minPrice=1&maxPrice=10000`,
                {
                    headers: {
                        Authorization: `${token_type} ${loginToken}`
                    }
                }
            );
            setItems(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getItems();
    }, [company, category]);

    return (
        <div>
            <h1>Products</h1>
            <div>
                <label >Select Company: </label>
                <select value={company} onChange={(e) => setCompany(e.target.value)}>
                    <option value="AMZ">AMZ</option>
                    <option value="FLP">FLP</option>
                    <option value="SNP">SNP</option>
                    <option value="MYN">MYN</option>
                    <option value="AZO">AZO</option>
                </select>
            </div>
            <div>
                <label>Select Category: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                    <option value="TV">TV</option>
                    <option value="Earphone">Earphone</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Charger">Charger</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keypad">Keypad</option>
                    <option value="Bluetooth">Bluetooth</option>
                    <option value="Pendrive">Pendrive</option>
                    <option value="Remote">Remote</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Headset">Headset</option>
                    <option value="Laptop">Laptop</option>
                    <option value="PC">PC</option>
                </select>
            </div>
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
                            <td>Rs.{item.price}</td>
                            <td>{item.rating}</td>
                            <td>{item.discount}%</td>
                            <td>{item.availability}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
