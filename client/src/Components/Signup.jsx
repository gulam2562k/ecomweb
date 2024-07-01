import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
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
            var item = {
                name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password,
                role: "Buyer"
            }
            let response = await fetch("/api/user", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(item)
            })
            response = await response.json()
            if (response.result === "Done")
                navigate("/login")
            else
                alert(response.message)
        }
        else
            alert("Password and Confirm Password Doesn't Matched!!!")
    }
    return (
        <>
            
            <div className='container my-5 w-100'>
                <div className='w-75 m-auto'>
                    <h5 className='text-center text-light menu-bg p-2'><span className='text-primary'>Create</span> Account</h5>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" onChange={getInputData} name="name" placeholder='Name : ' className='form-control' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Username</label>
                                <input type="text" onChange={getInputData} name="username" placeholder='Username : ' className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" onChange={getInputData} name="email" placeholder='Email : ' className='form-control' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="text" onChange={getInputData} name="phone" placeholder='Phone : ' className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Password</label>
                                <input type="password" onChange={getInputData} name="password" placeholder='Password : ' className='form-control' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Confirm Password</label>
                                <input type="password" onChange={getInputData} name="cpassword" placeholder='Confirm Password : ' className='form-control' />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn menu-bg text-light w-100'>Submit</button>
                        </div>
                    </form>
                    <Link to="/login">Alreay Have an Account?Login to Your Account</Link>

                </div>
            </div>
        </>
    )
}
