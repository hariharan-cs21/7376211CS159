import React, { useState } from 'react'
import api from "./Constants"
import axios from 'axios'
const Register = () => {
    const [accesCode, setaccessCode] = useState()
    const [email, setEmail] = useState()
    const [rollNO, setRollNo] = useState()

    const [owner, setOwner] = useState()
    const [company, setCOmpany] = useState()
    const registerCompany = async () => {
        if (!company || !owner || !rollNO || !owner || !accesCode) {
            alert("Fill all details")
            return
        }
        try {
            const response = await axios.post(`${api}/products/register`, {
                companyName: company,
                ownerName: owner,
                rollNo: rollNO,
                ownerEmail: email,
                accessCode: accesCode
            })
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div className="mb-4">
                <div>

                    <input
                        placeholder='Enter Company Name'
                        value={company}
                        onChange={(e) => setCOmpany(e.target.value)}
                        required
                        className="py-3 px-4 mb-1 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm" />
                    <input
                        placeholder='Enter Owner Name'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        required
                        className="py-3 px-4 mb-1 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm" />
                    <input
                        className="py-3 mb-1 px-4 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm"
                        value={rollNO}
                        onChange={(e) => setRollNo(e.target.value)}
                        placeholder='Enter rollNO'
                        required
                    />
                    <input
                        className="py-3 mb-1 px-4 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm"
                        value={accesCode}
                        onChange={(e) => setaccessCode(e.target.value)}
                        placeholder='Enter accesscode'
                        required
                    />
                    <input
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="py-3 px-4 mb-1 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm" />
                    <button onClick={registerCompany}>Register</button>
                    <div>

                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register