export async function createData(payload){
    var response = await fetch("/api/cart",{
        method:"post",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function getData(){
    var response = await fetch("/api/cart/"+localStorage.getItem("userid"),{
        method:"get",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateData(payload){
    var response = await fetch("/api/cart/"+payload._id,{
        method:"put",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}
export async function deleteData(payload){
    var response = await fetch("/api/cart/"+payload._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}