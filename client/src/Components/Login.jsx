import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    let [data, setData] = useState({
        username: "",
        password: ""
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
        var response = await fetch("/api/user/login", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify({...data})
        })
        response = await response.json()
        if (response.result==="Done") {
            localStorage.setItem("login",true)
            localStorage.setItem("name",response.data.name)
            localStorage.setItem("username",response.data.username)
            localStorage.setItem("userid",response.data._id)
            localStorage.setItem("role",response.data.role)
            localStorage.setItem("token",response.token)
            if(response.data.role==="Admin")
            navigate("/admin")
            else
            navigate("/profile")
        }
        else {
            alert(response.message)
        }
    }
    return (
        <>
            
            <div className='container my-5 w-100'>
                <div className='w-75 m-auto'>
                    <h5 className='text-center text-light menu-bg p-2'><span className='text-primary'>Login</span> to Your Account</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input type="text" onChange={getInputData} name="username" placeholder='Username : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" onChange={getInputData} name="password" placeholder='Password : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn menu-bg text-light w-100 '>Submit</button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-between'>
                        <Link to="/forget-password-1">Forget Password?</Link>
                        <Link to="/signup">New User?Create a Free Account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
