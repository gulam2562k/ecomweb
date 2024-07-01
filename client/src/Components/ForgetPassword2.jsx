import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword2() {
    let [data, setData] = useState({
        otp: ""
    })
    var navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var response = await fetch("/api/user/forget-password-2", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...data, username: localStorage.getItem("reset-password-user") })
        })
        response = await response.json()
        if (response.result === "Done") {
            navigate("/forget-password-3")
        }
        else {
            alert(response.message)
        }
    }
    return (
        <>
           
            <div className='container my-5 w-100'>
                <div className='w-75 m-auto'>
                    <h5 className='text-center text-light menu-bg p-2'><span className='text-primary'>Reset</span> Password</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input type="text" onChange={getInputData} disabled name="username" placeholder='Username : ' value={localStorage.getItem("reset-password-user")} className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label>OTP</label>
                            <input type="text" onChange={getInputData} name="otp" placeholder='Enter OTP which is Sent on Your Registered Email Id and Phone Number : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn menu-bg text-light w-100'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


