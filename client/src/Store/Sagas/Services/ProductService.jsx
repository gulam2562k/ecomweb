export async function createData(payload) {
    var response = await fetch("/api/product", {
        method: "post",
        headers: {
            "authorization": localStorage.getItem("token")
        },
        body: payload
    })
    return await response.json()
}
export async function getData() {
    var response = await fetch("/api/product", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateData(payload) {
    var response = await fetch("/api/product/" + payload.get('_id'), {
        method: "put",
        headers: {
            "authorization": localStorage.getItem("token")
        },
        body: payload
    })
    return await response.json()
}
export async function deleteData(payload) {
    var response = await fetch("/api/product/" + payload._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}