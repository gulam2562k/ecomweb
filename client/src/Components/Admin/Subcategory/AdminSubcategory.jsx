import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import {deleteSubcategory, getSubcategory} from "../../../Store/ActionCreators/SubcategoryActionCreators"
export default function AdminSubcategory() {
    var [data,setData] = useState([])
    var allStateData = useSelector(state=>state.SubcategoryStateData)
    var dispatch = useDispatch()
    function deleteItem(_id){
        if(window.confirm("Are You Sure to Delete that Item : ")){
            dispatch(deleteSubcategory({_id:_id}))
            getAPIData()
        }
    }
    function getAPIData(){
        dispatch(getSubcategory())
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
                        <h5 className='bg-primary p-3 text-light text-center rounded'>Subcategory<Link to="/admin-add-subcategory"><i className='fa fa-plus text-light float-right'></i></Link></h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    {
                                        data.map((item,index)=>{
                                            return <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td><Link to={"/admin-update-subcategory/"+item._id}><i className='fa fa-edit'></i></Link></td>
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
