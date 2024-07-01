import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'


import {deleteNewsletter, getNewsletter} from "../../../Store/ActionCreators/NewsletterActionCreators"
export default function AdminNewsletter() {
    var [data,setData] = useState([])
    var allStateData = useSelector(state=>state.NewsletterStateData)
    var dispatch = useDispatch()
    function deleteItem(_id){
        if(window.confirm("Are You Sure to Delete that Item : ")){
            dispatch(deleteNewsletter({_id:_id}))
            getAPIData()
        }
    }
    function getAPIData(){
        dispatch(getNewsletter())
        if(allStateData.length)
        setData(allStateData)
    }
    useEffect(()=>{
        getAPIData()
    },[allStateData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Admin Section</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <h5 className='bg-primary p-3 text-light text-center rounded'>Newsletter</h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                    {
                                        data.map((item,index)=>{
                                            return <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.email}</td>
                                                <td><button className='btn text-primary' onClick={()=>deleteItem(item._id)}><i className='fa fa-trash'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
