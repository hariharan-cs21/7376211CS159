import React, { useState } from 'react'
import api from "./Constants"
import axios from 'axios'

const Login = ({ setLoginToken, settoken, setexpiry }) => {
    const [email, setEmail] = useState()
    const [rollNO, setRollNo] = useState()
    const [owner, setOwner] = useState()
    const [clientId, setcliendId] = useState()
    const [clientSecret, setClientSecret] = useState()
    const [company, setCOmpany] = useState()
    const signIn = async () => {
        if (!company || !owner || !rollNO || !owner || !clientId || !clientSecret) {
            alert("Fill all details")
            return
        }
        try {
            const response = await axios.post(`${api}/products/auth`, {
                companyName: company,
                ownerName: owner,
                rollNo: rollNO,
                ownerEmail: email,
                clientId: clientId,
                clientSecret: clientSecret
            })
            setLoginToken(response.data.access_token)
            setexpiry(response.data.expires_in)
            settoken(response.data.token_type)
            alert("Login Success")
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
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="py-3 px-4 mb-1 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm" />

                    <input
                        className="py-3 mb-1 px-4 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm"
                        value={clientId}
                        onChange={(e) => setcliendId(e.target.value)}
                        placeholder='Enter cliend ID'
                        required
                    />
                    <input
                        className="py-3 mb-1 px-4 w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-md shadow-sm"
                        value={clientSecret}
                        onChange={(e) => setClientSecret(e.target.value)}
                        placeholder='Enter Secret ID'
                        required
                    />
                    <button onClick={signIn}>Login</button>
                    <div>

                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login