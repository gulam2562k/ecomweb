import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import {deleteProduct, getProduct} from "../../../Store/ActionCreators/ProductActionCreators"
export default function AdminProduct() {
    var [data,setData] = useState([])
    var allStateData = useSelector(state=>state.ProductStateData)
    var dispatch = useDispatch()
    function deleteItem(_id){
        if(window.confirm("Are You Sure to Delete that Item : ")){
            dispatch(deleteProduct({_id:_id}))
            getAPIData()
        }
    }
    function getAPIData(){
        dispatch(getProduct())
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
                        <h5 className='bg-primary p-3 text-light text-center rounded'>Product<Link to="/admin-add-product"><i className='fa fa-plus text-light float-right'></i></Link></h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Color/Size</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    {
                                        data.map((item,index)=>{
                                            return <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.maincategory}/{item.subcategory}/{item.brand}</td>
                                                <td>{item.color}/{item.size}</td>
                                                <td><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice} <span className='text-success'> {item.discount}% Off</span></td>
                                                <td>{item.stock}</td>
                                                <td>
                                                    <a href={`/public/products/${item.pic1}`} rel="noreferrer" target="_blank">
                                                    <img src={`/public/products/${item.pic1}`} style={{height:"80px",width:"80px"}} className='rounded' alt="" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`/public/products/${item.pic2}`} rel="noreferrer" target="_blank">
                                                    <img src={`/public/products/${item.pic2}`} style={{height:"80px",width:"80px"}} className='rounded' alt="" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`/public/products/${item.pic3}`} rel="noreferrer" target="_blank">
                                                    <img src={`/public/products/${item.pic3}`} style={{height:"80px",width:"80px"}} className='rounded' alt="" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={`/public/products/${item.pic4}`} rel="noreferrer" target="_blank">
                                                    <img src={`/public/products/${item.pic4}`} style={{height:"80px",width:"80px"}} className='rounded' alt="" />
                                                    </a>
                                                </td>
                                                <td><Link to={"/admin-update-product/"+item._id}><i className='fa fa-edit'></i></Link></td>
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
