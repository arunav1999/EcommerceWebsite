import {toast} from 'react-toastify'
export const getProducts = () =>{
    return fetch('/api/getproducts')
            .then((res) => res.json())
            .catch((err) => {
                console.log('Error fetching the products',err)
                return [];
            })
}

export const addProducts = async (pname, price, imglink, description, token) =>{

    const preparedData = {
        pname,
        price,
        imglink,
        description
    }
    const res = await fetch('/api/createNewProduct',
    {
        
        method: 'POST',
        headers: {
            token,
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(preparedData)

    })
    const {success} = await res.json();
    if(success)
    {
        toast('Product Added Successfully !')
    }
    else
    {
        toast('Product Not Added!')
    }
}

export const getProductForId = (product_id) =>{
    var receivedProduct = {}
    fetch('/api/getproductById/'+product_id)
            .then((res) => res.json())
            .then((res) => console.log(res))
    return receivedProduct;
}