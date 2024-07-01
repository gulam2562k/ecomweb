import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword3() {
    let [data, setData] = useState({
        password: "",
        cpassword: ""
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
        if (data.password === data.cpassword) {
            var response = await fetch("/api/user/forget-password-3", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ password: data.password, username: localStorage.getItem("reset-password-user") })
            })
            response = await response.json()
            if (response.result === "Done") {
                localStorage.removeItem("reset-password-user")
                navigate("/login")
            }
            else {
                alert(response.message)
            }
        }
        else
            alert("Password and Confirm Password Doesn't Matched!!!")
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
                            <label>Password</label>
                            <input type="password" onChange={getInputData} name="password" placeholder='Password : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input type="password" onChange={getInputData} name="cpassword" placeholder='Confirm Password : ' className='form-control' />
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


